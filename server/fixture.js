var postData=[
	{
		title:'Introduction to Telescope',
		url:'http://sachagreif.com/introducing-telescope/'
	},
	{
		title:'Meteor',
		url:'http://meteor.com'
	},
	{
		title:'The Meteor Book',
		url:'http://themeteorbook.com'
	},
	{
		title:'Google',
		url:'http://www.google.com'
	}
];

if(Posts.find().count()===0){
	for(i=0;i<postData.length;i++){
		Posts.insert(postData[i]);
	}
}