$(function(){
    $.get('http://localhost:3000/paras',function (data){
        data.forEach(p => {
            $("#paraList").append(`<li id=${p.id}>${p.text}</li>`)
        });
    })
    $("#addPara").click(function(){
        $("#paraList").append(`<li>${$("#paraText").val()}</li>`)
        $.post('http://localhost:3000/paras',$('#myParaForm').serialize())
        $("#paraText").val("")
    })
})