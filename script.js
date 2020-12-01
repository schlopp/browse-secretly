$(document).ready(function(){


  $("#go_undercover").on('click', function(){
    website = prompt("Enter a website\n('https://youtube.com', etc)");
    window.open(website, "", "width=1000,height=1000");
  });

  $(".links span").on('click', function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('copied!');
  });

});
