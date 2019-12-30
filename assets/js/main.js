$(document).ready(function(){
    $(".example").hide();
    $("nav ul li").click(function(){
        $(".example").hide();
        resetValues();
        $(".code").html("Code will show here");
        var click=$(this).find("a").attr("href");
        tip=click.replace("#","");
        $(click).slideDown();
        $("nav ul li a").removeClass("active");
        $(this).find("a").addClass("active");
    })
    $(".x").on("input",function(){
        range(this,".xValue");
    })
    $(".y").on("input",function(){
        range(this,".yValue");
    })
    $(".xValue").on("blur",function(){
       input(".x",this);
       $(".xValue").val($(".xValue").val()+"px")
    })
    $(".yValue").on("blur",function(){
        input(".y",this);
        $(".xValue").val($(".xValue").val()+"px")
     })
     $(".blur").on("input",function(){
        range(this,".blurValue");
    })
    $(".blurValue").on("blur",function(){
        input(".blur",this);
     })
     $(".color").on("change",function(){
        range(this,".colorValue");
     })
     /*$(".colorValue").on("blur",function(){
        input(".color",this);
        $(".colorValue").val().replace("px","");
     })*/
     $("#yourText :text").on("input",function(){
         $("#textShadow .result span").html($(this).val());
     })
})
var tip;
function resetValues(){
    $(":text").val("0");
    $("#yourText :text").val("Your text");
    $(".example form input[type=range]").val("0");
    $("#textShadow .result span").removeAttr('style');
    $("#boxShadow .result div").removeAttr('style');
}
function range(toggler,field){
    $(field).val($(toggler).val());
    if(tip=="textShadow"){
        textShadow();
    }
    else{
        boxShadow();
    }
    showCode();
}
function input(toggler,field){
    $(toggler).val($(field).val());
    if(tip=="textShadow"){
        textShadow();
    }
    else{
        boxShadow();
    }
    showCode();
}
function textShadow(){
    $("#textShadow .result span").css("text-shadow",`${$(`#${tip} .color`).val()} ${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px`);
}
function boxShadow(){
    $("#boxShadow .result div").css("box-shadow",`${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}`);
}
function showCode(){
    var code="";
    if(tip=="textShadow"){
        code=`text-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
        -webkit-text-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
        -moz-text-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
        -o-box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
        -ms-box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}`;
    }
    else{
            code=`box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
            -webkit-box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
            -moz-box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
            -o-box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}<br/>
            -ms-box-shadow:${$(`#${tip} .x`).val()}px ${$(`#${tip} .y`).val()}px ${$(`#${tip} .blur`).val()}px ${$(`#${tip} .color`).val()}`;
    }
    $(".code").html(code);
}
