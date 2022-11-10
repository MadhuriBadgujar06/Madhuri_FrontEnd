
function validate()
{
   var mail = document.getElementById("text").value;

   var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

   if(regx.test(mail)){
     document.getElementById("ifright").style.display="block";
     document.getElementById("ifwrong").style.display="none";
      return true
   }
   else{
    document.getElementById("ifwrong").style.display="block";
    document.getElementById("ifright").style.display="none";
    document.getElementById("text").style.borderColor="red"
      return false
   }
} 