$(document).ready(function(){

  var mooc_url={
    mycourse:"http://mooc.101.com/study/mylearn/mycourse",
    mySpecialty:"http://mooc.101.com/study/specialty/mySpecialty",
    myscore:"http://mooc.101.com/study/mylearn/myscore"
  }

  $("#mycourse").click(function(){
    chrome.tabs.create({url:mooc_url.mycourse})
  });

  $("#mySpecialty").click(function(){
    chrome.tabs.create({url:mooc_url.mySpecialty})
  });

  $("#myscore").click(function(){
    chrome.tabs.create({url:mooc_url.myscore})
  })

  
})
