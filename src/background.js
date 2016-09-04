function newNotification(notification){
  var msg = new Notification(notification.title,{
    icon:"image/101mooc48.png",
    body:notification.body
  })
  setTimeout(function(){
    msg.close()
  },5000)
}

function excute(request){
  switch (request.fname) {
    case "newNotification":
      newNotification(request.notification)
      break;
    default:
  }
}


chrome.extension.onRequest.addListener(
  function(request,sender,response){
    excute(request)
  }
)
