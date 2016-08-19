function newNotification(notification){
  new Notification(notification.title,{
    icon:"image/101mooc48.png",
    body:notification.body
  })
}


chrome.extension.onRequest.addListener(
  function(request,sender,response){
    if(request.fname == "newNotification"){
      newNotification(request.notification)
    }
  }
)
