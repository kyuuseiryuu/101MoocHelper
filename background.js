var MHMenues = {}
MHMenues.guaji = chrome.contextMenus.create({
  title:"开始挂机",
  documentUrlPatterns:["http://*.101.com/study/learning/*"],
  onclick:function(info,tab){
    new Notification("Title",{
      icon:"image/101mooc48.png",
      body:"This is notification body."
    });
    chrome.tabs.excuteScript(null,{"file":"core1.1.js","all_frames":true},null)
  }
});
