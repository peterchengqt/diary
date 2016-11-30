/**
 * Created by Perter on 2016/11/15.
 */
$(".nav-expand-collaspe").click(function () {
    var mark=$(this).parent("td").parent("tr").data("mark");
    if($(this).text()=="展开") {
        $(this).text("收缩");
    }else{
        $(this).text("展开");
    }
    $("#nav-table tr[data-parent="+mark+"]").toggle();
})
$("#update-logo-file-button").change(function () {
    $("#update-logo-form input[name=filepath]").val($(this).val());
})
modalAlert.init();
$(".nav-parent-delete").click(function () {
    modalAlert.confirm("warning","are you sure delete the selected row?",function (flag) {
        if(flag){
            modalAlert.close();
        }
    })
})