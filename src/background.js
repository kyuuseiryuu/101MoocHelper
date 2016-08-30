function newNotification(notification){
  var msg = new Notification(notification.title,{
    icon:"image/101mooc48.png",
    body:notification.body
  })
  setTimeout(function(){
    msg.close()
  },5000)
}


chrome.extension.onRequest.addListener(
  function(request,sender,response){
    if(request.fname == "newNotification"){
      newNotification(request.notification)
    }
  }
)
