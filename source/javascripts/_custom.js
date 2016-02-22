function printTweets(tweets, tweetContainerEl){
  var tweetContainer = $(tweetContainerEl);
  $(tweets).each(function(){
    var status = this.tweet.split('-- ');
    if(status[0].indexOf("STATUS UP") > -1){
      var statusClass = 'green',
      statusTitle = 'SERVER UP',
      image = 'https://pbs.twimg.com/profile_images/378800000498283246/ee506323d868cf46ac1ba9fb83c99ee3.jpeg';
    } else if(status[0].indexOf("STATUS DOWN") > -1){
      var statusClass = 'red',
      statusTitle = 'SERVER DOWN',
      image = 'http://www.clipartbest.com/cliparts/dc6/Moo/dc6MooMc9.jpeg';
    }
    var tweet = '<li class="collection-item avatar '+statusClass+'  accent-2">'
      + '<img src="'+image+'" alt="" class="circle">'
      + '<span class="title '+statusClass+'-text text-accent-4"><h5>'+statusTitle+'</h5></span>'
      + '<p class="'+statusClass+'-text text-accent-4">'+status[1]+'<br>'
        + this.time
      + '</p>'
  + '</li>';
    tweetContainer.append(tweet);
  });
}

$(function(){
  printTweets(tweets, "#tweet-container");
});




