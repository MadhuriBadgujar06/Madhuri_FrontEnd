const MyLoad=()=>{
    const Qtycols=document.getElementsByName("qty");
    const Pricecols=document.getElementsByName("price");
    for (let index=0;index<Qtycols.length;index++)
    {
        Qtycols[index].addEventListener('change',function(){
            calc(index);
        });
        Pricecols[index].addEventListener('change',function(){
            calc(index);
            totalprice(index);
        });
    }
}
function calc(index)
{
    var qty=document.getElementsByName('qty')[index].value;
    var rate=document.getElementsByName('price')[index].value;
 var amnt=qty*rate;
 document.getElementsByName('total')[index].value=amnt;
}
let amnt=0;
function totalprice(index)
{
    var total=document.getElementsByName('total')[index].value;
    console.log("Total :"+total);
     amnt=amnt +(Number(total)) 
     console.log("Amount :"+amnt)
    document.getElementById('subtotal').value=amnt;
}