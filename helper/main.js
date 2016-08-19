

function showNotification(notification){
  var _notification = {
    title:notification.title,
    body:notification.body
  }
  console.log(_notification)
  chrome.extension.sendRequest({
    fname:"newNotification",
    notification:_notification
  })
}

function run(){
  if(helper.isCompleted()){
    if(helper.canNext()){
      var nxt = helper.getNextElement()
      if(nxt != undefined){
          nxt.click(0)
          start()
          return
      }
      showNotification({
        title:"课程结束",
        body:"感谢使用本插件，本插件由Chioy提供。"
      })
      return
    }
  }
  if(helper.getCourseType().type=="document"){
    helper.document.readDoc()
    start()
    return
  }
  helper.video.play()
  setTimeout(function(){
    start()
  },(helper.video.getSeconds()+5)*1000)
}

function start(){
  showNotification({
    title:"正在播放："+helper.getCourseName(),
    body:helper.getLessonName()
  })
  setTimeout(function () {
    run()
  }, 10*1000);
}


$(document).ready(function(){
  start()
})
