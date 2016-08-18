var helper = {
  //关于视频课件的相关函数
  video:{
    play:function (){
      if($("a.ln-confirm-btn.j-resume1").length>=1){
        $("a.ln-confirm-btn.j-resume1")[0].click(0);
      }else{
        $("a.ln-confirm-btn.j-resume1").click(0);
      }
    },

    getTimeString:function(){
      try{
          var html = $(".active")[1].innerHTML;
          var pattern = new RegExp("[\\d+](:\\d\\d){2}");
         if(pattern.test(html)){
            return pattern.exec(html)[0];
          }else{
            return "0:00:00";
          }
        }catch(e){
          return "0:00:00";
        }
    },
    getSeconds:function(){
      var t = helper.video.getTimeString().split(":");
      var len = t.length;
      var h = parseInt(t[len-3]);
      var m = parseInt(t[len-2]);
      var s = parseInt(t[len-1]);
      return (s+m*60+h*60*60);
    }
  },

  //关于文档课件的相关函数
  document:{
    getPageSize:function(){
      return parseInt($("span.pageindex").children[$("span.pageindex").children.length-1].innerHTML);
    },

    readDoc:function(){
      var length = helper.document.getPageSize();
      for(var i = 0;i<4*length;i++){
        try{
          $(".i-doc-next").click(0);
        }catch(e){

        }

      }
    }
  },

  //通用函数
  getCourseName: function(){
    return $("title")[0].innerHTML;
  },
  getLessonName:  function(){
    return $("ul.clearfix li.active").find("em")[0].innerHTML;
  },
  getCourseType:function(){
    return helper.video.getSeconds()==0?{"type":"document"}:{"type":"video"}
  },
  isCompleted:function(){
    return $(".active.full") != undefined;
  },
  nextSection:function(){
    return $("dd.active").next();
  },
  nextResource:function(){
    return $(".active.full").next();
  },
  nextChapter:function(){
    return $("dd.active").parent().next();
  },
  getNextElement:function(){
    if(helper.nextResource().length==1){
      return helper.nextResource().find("a")[0];
    }
    if(helper.nextSection().length==1){
      return helper.nextSection().find("a")[0];
    }
    if(helper.nextChapter().length==1){
      return helper.nextChapter().find("a")[0];
    }
  }

}
