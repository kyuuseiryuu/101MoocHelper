var text = $("h1 span").text()
var btn_start = "<a id='start'>"+ "点击开始挂机：《" +text+"》</a>"
var btn_stop = "<a id='stop'>"+ "正在挂机：《" +text+"》，单击结束</a>"
$($("div.bottom-word span")[0]).append("&nbsp;&nbsp;|&nbsp;&nbsp;<a href='https://github.com/HeyChioy/101MoocHelper' target='_blank'>福软Mooc助手：GitHub</a>")
$("h1 *").remove()
$("h1").append(btn_start)
$("#start").click(function(){
  init()
  this.remove()
  $("h1").append(btn_stop)
  $("#stop").click(function(){
    window.location.reload()
  })
})
