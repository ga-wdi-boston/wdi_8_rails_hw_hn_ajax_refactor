$(document).ready(function(){
	$('#submit').click(function(event) {
		event.preventDefault();
		createStory();
	})
});

var createStory = function() {
	$.ajax({
		url: '/submit',
		type: 'post',
		data: {title: $('#title').val(), link: $('#link').val(), body: $('#body').val()},
		dataType: 'json',
		success: function (data) { }
	});
};