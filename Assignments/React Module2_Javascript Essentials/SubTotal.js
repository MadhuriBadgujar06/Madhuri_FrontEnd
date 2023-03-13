function MyLoad()
{
const input=document.getElementsByTagName('input');
// console.log(input)
for(let i=0;i<input.length;i++)
{
    input[i].addEventListener("change",function(){
        // var num=input[i].name;
        // // console.log(num.value)
        // Total(num);
        Total();
    })
}
}
// function Total(ls_num)
// {
//     let base =document.getElementsByName("ls_num");

//     console.log(base);
//     var ls_mult = 1;
//     for(let i=0;i<base.length;i++)
//     {
//         // var ls_base=base[i].value;
//          ls_mult = +ls_mult * +base[i].value
//     }
//     document.getElementById(ls_num +"_total").value = ls_mult;
// }
// // const s=console.log("VAl :"+Total());

function Total()
{
    console.log(document.getElementsByName("row1"))
    let qty=document.getElementsByName("row1");
    console.log(qty[0].value);
    let price=document.getElementsByName("row2");
    console.log(price[0].value);
    // var total;
    let subtotal = document.getElementsByName("total")
    console.log("Subtotall :"+subtotal[0].value)
    for(i=0;i<qty.length;i++)
    {
    // let total=qty[i].value*price[i].value;
    // console.log(total)
     
    console.log("subtotal"+subtotal[i]);
    // amnt[i].value=total[i].value;
    console.log(qty[i].value);
    console.log(qty[i].value);
}
// console.log("tOTAL :"+total)

}