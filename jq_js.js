// 1. ajax
$.ajax({
  url: "bid_detail",
  type: "get",
  dataType: "json",
  data: { project_id: project_id },
  success: function(data) {
    $('#div1').append(data);
  },
  error: function() {
    console.log("error")
  }
});
// 关于ajax请求的url 如果加”/bid_detail“ （加了/）是在根目录下的路径,如果直接是“bid_detail” (没有/)则是在当前页面controller中的action
// 如果跳转当前页面可以使用 #{request.url}

// 2.设置或返回被选元素的属性值attr
$("img").attr("src"); //返回元素 
$("img").attr({ src: "test.jpg", alt: "Test Image" }); //这只元素

//3.检查当前的元素是否含有某个特定的类，如果有，则返回true
container.attr('data-current')

//4. text
// (1) 返回元素的文本内内容
$(".click_show").text();
// (2) 使用函数来设置元素的文本内容。(原文本会消失)
$(".click_show").text("这个杀手");

//5. 为每个匹配的元素添加指定的类名 addClass
$("p").addClass("selected");

//6.向每个匹配的元素内部追加内容。append
$(".click_show").append("就在这个地方追加")

//7. animate 方法执行 CSS 属性集的自定义动画
// 点击按钮后div元素的几个不同属性一同变化
{
  /*<button id = "go" > Run < /button> 
  <div id = "block" > Hello! < /div>*/
}
$("#go").click(function() {
  $("#block").animate({
    width: "90%",
    height: "100%",
    fontSize: "10em",
    borderWidth: 10
  }, 1000);
});

//8. siblings([expr]) 取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合。可以用可选的表达式进行筛选。
//点击切换tab样式
$(this).addClass('hover').siblings().removeClass('hover');


$.validator.addMethod("timeBigThan", function(value, element) {
  start_time = $('#offer_on').val()
  console.log(start_time)
  console.log(value)
  if (Date.parse(value) > Date.parse(start_time)) {
    alert(value)
    return true;
  } else {
    return false;
  }
}, "结束时间不许大于开始时间！");


$("form").submit(function() {
  start_time = $('#offer_on').val()
  end_time = $('#offer_off').val()
  alert(Date.parse(end_time))
  alert(isNaN(parseInt(start_time)))
  if (Date.parse(end_time) < start_time) {
    $("#end_time_error").text("领取结束时间必须大于开始时间")
    alert(1)
    return false;
  }
  return false;
});