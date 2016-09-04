var FRMoocHelper = function(wait){
    //关于视频课件的相关函数
    this.waitTime = +wait//'+'号转换为int类型
    this.video = {
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
        var t = this.getTimeString().split(":");
        var len = t.length;
        var h = parseInt(t[len-3]);
        var m = parseInt(t[len-2]);
        var s = parseInt(t[len-1]);
        return (s+m*60+h*60*60);
      }
    },

    //关于文档课件的相关函数
    this.document = {
      getPageSize:function(){
        return +$("span.pageindex").children("span")[1].innerHTML
      },

      readDoc:function(){
        var length = this.getPageSize();
        $(".minimap-item-bg")[length-1].click();
      }
    },

    //通用函数
    this.getChapterName = function(){
      return $(".study-section-title span")[0].innerHTML
    },
    this.getSectionName = function(){
      return  $(".study-section-title span")[2].innerHTML
    },
    this.getCourseName =  function(){
      return $("title")[0].innerHTML;
    },
    this.getLessonName =  function(){
      return $("ul.clearfix li.active").find("em")[0].innerHTML;
    },
    this.getCourseType = function(){
      return this.video.getSeconds()==0?{"type":"document"}:{"type":"video"}
    },
    this.isCompleted = function(){
      return $(".active.full")[0] != undefined;
    },
    this.nextSection = function(){
      return $("dd.active").next();
    },
    this.nextResource = function(){
      return $(".active.full").next();
    },
    this.nextChapter = function(){
      return $("dd.active").parent().next();
    },
    this.getNextElement = function(){
      if(this.nextResource().length==1){
        return this.nextResource().find("a")[0];
      }
      if(this.nextSection().length==1){
        return this.nextSection().find("a")[0];
      }
      if(this.nextChapter().length==1){
        return this.nextChapter().find("a")[0];
      }
    },
    this.canNext = function(){
      return this.getNextElement() != undefined
    }
}
