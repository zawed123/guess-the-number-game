function checkNumber() 
{
  var userInput=document.getElementById('user-input').value;
  var attemp=document.getElementById('attemp').value;
  var answer=document.getElementById("answer").value
  var msg=document.getElementById('msg');
  var result=document.getElementById('result');
  if(!answer)
  {
  answer=generateRandomAnswer();
  document.getElementById("answer").value=answer;
  }
   if(!attemp)
   {
     attemp=0;
   }

  if(!validateInput(userInput))
  {
    msg.innerHTML="<p class='text-danger'>Number should be 4-digt long</p>";
    return;
  }
  else
  {
    msg.innerHTML="";
    attemp++;
    document.getElementById('attemp').value=attemp;
  }
  /* Algorithm */
  var conntectDigit=0;
  var html='<tr><td>'+userInput+'</td><td>';
  for(let i=0;i<userInput.length;i++)
  {
   if(userInput[i]==answer[i])
   {
   	html=html+'<i class="fa fa-check text-success" style="padding:3px"></i>';
    conntectDigit++;
   } else if(answer.indexOf(userInput[i])>-1)
   {
     html=html+'<i class="fa fa-exchange text-warning" style="padding:3px"></i>';
   }
   else{
     html=html+'<i class="fa fa-times text-danger" style="padding:3px"></i>';
   }
  } 
  html=html+'</td></tr>';

  result.innerHTML+=html;
  if(conntectDigit===userInput.length)
  {
    //you are winner
     msg.innerHTML="<p class='msg-sucess'>Wooohhooo, You are a born Winner</p>";
     document.getElementById("btn-guess").style="display:none";
    document.getElementById("btn-reply").style="display:block";
  }
  else if(attemp>=10)
  {
    //you lost
    msg.innerHTML="<p class='text-danger'>Sorry, You lost. Plese play again to Win.</p>";
    document.getElementById("btn-guess").style="display:none";
    document.getElementById("btn-reply").style="display:block";
  }
  else{
  	//try again
  	msg.innerHTML="<p class='text-primary'>Incorrect guess. Try Again!</p>";
  }
}


function generateRandomAnswer()
{
  var num=(Math.floor(Math.random()*8900)+1000).toString();
  return num;
}

function validateInput(str)
{
  if (str.length==4)
  	return true;
  else
  	return false;
}