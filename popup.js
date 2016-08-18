$(document).ready(function(){

  $("#go_mooc").click(function(){
    chrome.tabs.create({url:"http://mooc.101.com/study/mylearn/mycourse"})
  });

  $("#play").click(function(){
    console.log("play")
    helper.video.play()
  })




})
