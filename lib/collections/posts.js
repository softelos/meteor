Posts=new Mongo.Collection('posts');

Meteor.methods({
	postAdd:function(postAttributes){

		check(this.userId,String);
		check(postAttributes,{
			title:String,
			url:String
		});

		if(Meteor.isServer){
			postAttributes.title+=' (server)';
			Meteor._sleepForMs(5000);
		}else{
			postAttributes.title+=' (client)';
		}

		var posWithTheSameLink=Posts.findOne({url:postAttributes.url});
		if(posWithTheSameLink){
			return {
				postExists:true,
				_id:posWithTheSameLink._id
			}
		}

		var user=Meteor.user();
		var post=_.extend(postAttributes,{
			userId:user._id,
			author:user.username,
			submitted:new Date()
		});
		var postId=Posts.insert(post);
		return {
			_id:postId
		};
	}
});