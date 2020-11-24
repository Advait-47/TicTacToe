var setMove=[0,0,0,0,0,0,0,0,0];
var start=false,is0=true;
var i=0,allFilled=0;

$(document).on("keydown",function(){
  if(!start){
    allFilled=0;
    $("button").html("&nbsp;");
    $(".headText").html("Press any key to play");
    setMove=[0,0,0,0,0,0,0,0,0];
    start=true;
    $(".headText").html("Begin");
    begin();
  }
});

function begin(){
  if(start){
    $("button").on("click",function(){
        if(setMove[Number(this.classList[1].slice(1,2))]==0){
          setMove[Number(this.classList[1].slice(1,2))]=1;
          if(is0){
            this.innerHTML="0";
          }
          else{
            this.innerHTML="X";
          }
          is0=!is0;
          setTimeout(function(){won();},100);
        }
      });
  }
  }



function won()
{

  for(i=0;i<=8;i+=3){
    if($("button.b"+i).html() == $("button.b"+(i+1)).html() && $("button.b"+(i+1)).html()==$("button.b"+(i+2)).html() && $("button.b"+i).html()!="&nbsp;"){
      $(".headText").html($("button.b"+i).html()+" has won!!!! Press a key to restart");
      $("button").off("click");
      start=false;
    }
  }
  for(i=0;i<=8;i++){
    if($("button.b"+i).html() == $("button.b"+(i+3)).html() && $("button.b"+(i+3)).html()==$("button.b"+(i+6)).html() && $("button.b"+i).html()!="&nbsp;"){
      $(".headText").html($("button.b"+i).html()+" has won!!!! Press a key to restart");
      $("button").off("click");
      start=false;
    }
  }
  if($("button.b"+0).html() == $("button.b"+4).html() && $("button.b"+4).html()==$("button.b"+8).html() && $("button.b"+0).html()!="&nbsp;"){
    $(".headText").html($("button.b"+4).html()+" has won!!!! Press a key to restart");
    $("button").off("click");
    start=false;
  }
  if($("button.b"+2).html() == $("button.b"+4).html() && $("button.b"+4).html()==$("button.b"+6).html() && $("button.b"+2).html()!="&nbsp;"){
    $(".headText").html($("button.b"+4).html()+" has won!!!! Press a key to restart");
    $("button").off("click");
    start=false;
  }
  // for(i=0;i<=8;i++)
  // {
  //   if(setMove[i]==1){
  //     allFilled=1;
  //   }
  // }
  // if(allFilled==1){
  //   $(".headText").html("Its a draw! press any key to restart");
  //   start=false;
  // }
  if(setMove.every(function(e){
    return e==1 ;
  })){
    $(".headText").html("Its a draw! press any key to restart");
    start=false;
  };

}
