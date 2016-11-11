/**
 * Created by Perter on 2016/11/10.
 */
$('.index-row-1-banner').unslider({
    autoplay:true,
    arrows:false
});
//$('#index-row-1-nav a:first').tab('show')
$("#index-row-1-nav a").mouseover(function (e) {
    $(this).tab('show');
})
$("#index-row-1-think div[role=blockTip]").each(function () {
    var parent=$(this).parent("div[role=block]");
    var parentWidth=parent.css("width")
    $(this).css("width",(parseFloat(parentWidth.substring(0,parentWidth.indexOf("px")))-30)+"px");
})
