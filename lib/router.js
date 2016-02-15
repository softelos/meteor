Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound',
	waitOn:function(){
		return Meteor.subscribe('posts');
	}
});

Router.route('/',{
	name:'postsList'
});

Router.route('/posts/view/:_id',{
	name:'postPage',
	data:function(){
		return Posts.findOne({_id:this.params._id});
	}
});

Router.route('/posts/add',{
	name:'postAdd'
});

Router.onBeforeAction('dataNotFound',{only:'postPage'});


Router.onBeforeAction(function(){
	if(!Meteor.user()){
		if(Meteor.loggingIn()){
			this.render(this.loadingTemplate)
		}else{
			this.render('accessDenied');
		}
	}else this.next();
},{only:'postAdd'});