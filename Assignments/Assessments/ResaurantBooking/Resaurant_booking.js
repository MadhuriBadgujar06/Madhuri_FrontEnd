
function incr() {
  let val = document.getElementById("number").innerHTML;
  val++;
  document.getElementById("number").innerHTML = val;
}
function decr() {
  let val = document.getElementById("number").innerHTML;
  val--;
  document.getElementById("number").innerHTML = val;
}
let x = 1;
let y = 1;
let z = 1;
document.getElementById("select").addEventListener("change", (event) => {
function show_date() {
  const date = document.createElement("div");
  x=x + 1;
  date.innerHTML = '<input type="date" id="date">';
  Booking = document.getElementById("Booking_info");
  Booking.appendChild(date);
}
function show_time() {
  y=y + 1;
 const time = document.createElement("div");
  time.innerHTML = '<input type="time" id="time">';
  const Booking = document.getElementById("Booking_info");
  Booking.appendChild(time);
}
function show_slot() {
  z=z+1;
 const slot = document.createElement("div");
  slot.innerHTML =
    '<select id="slot"><option>9AM-12PM</option><option>12AM-3PM</option><option>3PM-6PM</option><option>6PM-9PM</option><option>9PM-11PM</option></select>';
 const Booking = document.getElementById("Booking_info");
  Booking.appendChild(slot);
}
 if (event.target.value === "1") {
  if(x===1)
  {
    show_date();     
  }
    let time=document.getElementById("time");
    if(time)
    {
      y=1;
    time.remove();
     }
    let slot=document.getElementById("slot");
    if(slot)
    {
      z=1;
    slot.remove();
     }
  }
   else if (event.target.value === "2") {
    if(x===1)
    {
      show_date();
    }
  if(y===1)
    {
    show_time();
  }
    let slot=document.getElementById("slot");
    if(slot)
    {
    slot.remove();
    z=1;
     }
  }    
  else if (event.target.value === "3") {
    if(x===1)
    {
      show_date();
    }
    if(y===1)
    {
    show_time();
  } 
  if(z===1)
  {
      show_slot();
    }

  }
  else{
    let slot=document.getElementById("slot");
    if(slot)
    {
    slot.remove();
    z=1;
     }
     let time=document.getElementById("time");
    if(time)
    {
    time.remove();
    y=1;
     }
     let date=document.getElementById("date");
    if(date)
    {
    date.remove();
    x=1;
     }
  }
});
