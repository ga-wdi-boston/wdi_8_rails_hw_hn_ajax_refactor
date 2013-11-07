$(document).ready(function() {
	ajax_load('/stories.json');
	$('#stories-list').on('click', '.upvote', function(event) {
		event.preventDefault();
		upvoteStory(event.target.id);
	});
	$('#stories-list').on('click', '.delete', function(event) {
		event.preventDefault();
		deleteStory(event.target.id);
	});
});

var list_stories = function(stories) {
	$('#stories-list').html('');
	$(stories).each(function(index, story) {
		var info = "<li><a href='" + story.link + "'>" + story.title + "</a><br /><span class='small_gray'><a class='upvote' href='/upvote/" + story.id + "'><img id='" + story.id +"' src='https://news.ycombinator.com/grayarrow.gif' alt='up arrow' /></a>" + story.up_votes + " | " + story.created_at + " | <a class='delete' id='" + story.id +"' href='/delete/" + story.id + "'>DELETE</a> |</span></li>";
		$('#stories-list').append(info);
	});
};

var ajax_load = function(url) {
	$.ajax({
	  dataType: "json",
	  url: url,
	  success: function(data) { list_stories(data); }
	});
};

var upvoteStory = function(id) {
	$.ajax({
		url: '/upvote/' + id,
		type: 'post',
		dataType: 'json'
	});
	ajax_load('/stories.json');
};

var deleteStory = function(id) {
	$.ajax({
		url: '/delete/' + id,
		type: 'post',
		dataType: 'json'
	});
	ajax_load('/stories.json');
};