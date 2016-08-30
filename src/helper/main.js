var helper = new FRMoocHelper()
function showClassInfo(){
  showNotification({
    title:"正在播放："+helper.getCourseName(),
    body:helper.getChapterName()+"\n-----------------\n"+helper.getSectionName()+"\n-----------------\n"+helper.getLessonName()
  })
}

function showOverInfo(){
  showNotification({
    title:"课程结束，感谢使用",
    body:"本插件由Chioy友情提供"
  })
}

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
      nxt.click(0)
      start()
      return
    }else{
      showOverInfo();
      return
    }
  }
  showClassInfo()
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
  setTimeout(function () {
    run()
  }, 10*1000);
}


$(document).ready(function(){
  start()
})
