
     let x = document.getElementsByClassName("slider-container");
     for(let i = 0;i < x.length ; i++)
     {
       console.log(x[i]);
     }
let flag=0;
function controller(x)
{
    flag = flag + x;
    slideshow(flag);

}
slideshow(flag);
function slideshow(num)
{
    let slides = document.getElementsByClassName('slide');
    console.log(slides);

    if(num == slides.length)
    {
        flag = 0;
        num = 0;
    }
    if(num < 0)
    {
        flag = slides.length-1;
        num = slides.length-1;
    }


    for(let y of slides)
    {
        y.style.display ='none';
    }
    console.log(num);
    slides[num].style.display="block";
}