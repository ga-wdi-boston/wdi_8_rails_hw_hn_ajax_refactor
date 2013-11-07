var H2ck3rNews = {};

H2ck3rNews.getStories = function() {
  $.ajax({
    url: '/stories.json',
    dataType: 'json',
    success: function(data) {
      H2ck3rNews.render_stories(data);
    }
  });
};

H2ck3rNews.render_stories = function(data) {
  $(data).each(function(index, story) {
    $('#stories').append("<div id='story" + story.id 
                       + "'><a href='" + story.link + "'>" 
                       + story.title + "</a></div>");
  });
};

$(function() {
  H2ck3rNews.getStories();
});