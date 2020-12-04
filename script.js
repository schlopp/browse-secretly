$(document).ready(function(){


  $("#go_undercover").on('click', function(){
    website = prompt("Enter a website\n('https://youtube.com', etc)");
    window.open(website, "", "width=1000,height=1000");
  });

  $(".links span").on('click', function(func){
    if (func.shiftKey){
      window.open($(this).text(), "", "width=1000,height=1000");}
    else{
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('copied!')};
  });

});
