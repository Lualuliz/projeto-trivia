 var nome = prompt("Qual seu nome?")



function check(){
  
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var correct=0;


    if (question1=="scripts"){
        correct++;
  }


   if (question2=="true"){
       correct++;
  }  


  if (question3=="img"){
      correct++;
  }


var messages=["Parabéns!" + nome,"quase lá!" + nome,"Você precisa melhorar um pouco!" + nome];


var range;

  if(correct<1){
      range=2;
  }
  
  if(correct>0&&correct<3){
      range=1;
  }
  
  if(correct>2){
      range=0;
  }


document.getElementById("after_submit").style.visibility="visible";


document.getElementById("messages").innerHTML=messages[range];
document.getElementById("number_correct").innerHTML="&rarr;acertou "+correct;



}

