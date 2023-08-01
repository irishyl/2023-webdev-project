$("button").click(function(){
    console.log($("h1").css("color"))
});

$(document).keypress(function(event){
    $("h1").text(event.key)
});