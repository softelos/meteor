Template.postAdd.events({
	'submit form':function(e){
		e.preventDefault();
		var post={
			url:$(e.target).find('[name=url]').val(),
			title:$(e.target).find('[name=title]').val(),
			user_id:Meteor.userId
		};
		Meteor.call('postAdd',post,function(error,result){
			if(error) return alert(error.reason);
			if(result.postExists) alert('This link has been already posted.');
			//Router.go('postPage',{_id:result._id});
		});
		Router.go('postsList');
	}
});