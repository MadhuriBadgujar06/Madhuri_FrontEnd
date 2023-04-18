////////////////Email Validation//////////
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
// ---------HIde And Show Menus---------------------
$(document).ready(function(){
   //---------------For Phone Menu---------------------
      $("#phone").mouseenter(function(){
          $(".Phone_menu").show();
      })
      $("#phone").mouseleave(function(){
          $(".Phone_menu").hide();
      })
      $(".Phone_menu").mouseenter(function(){
       $(this).show();
      })
      $(".Phone_menu").mouseleave(function(){
       $(this).hide();
      })
      //---------------For TV Menu---------------------
      $("#tv").mouseenter(function(){
          $(".tv_menu").show();
      })
      $("#tv").mouseleave(function(){
          $(".tv_menu").hide();
      })
      $(".tv_menu").mouseenter(function(){
       $(this).show();
      })
      $(".tv_menu").mouseleave(function(){
       $(this).hide();
      })
      //---------------For Audio Menu---------------------
      $("#audio").mouseenter(function(){
          $(".audio_menu").show();
      })
      $("#audio").mouseleave(function(){
          $(".audio_menu").hide();
      })
      $(".audio_menu").mouseenter(function(){
       $(this).show();
      })
      $(".audio_menu").mouseleave(function(){
       $(this).hide();
      })
         //---------------For Wearables Menu---------------------
         $("#wearables").mouseenter(function(){
          $(".wearables_menu").show();
      })
      $("#wearables").mouseleave(function(){
          $(".wearables_menu").hide();
      })
      $(".wearables_menu").mouseenter(function(){
       $(this).show();
      })
      $(".wearables_menu").mouseleave(function(){
       $(this).hide();
      })
          //---------------For Accessories Menu---------------------
          $("#accessories").mouseenter(function(){
          $(".accessories_menu").show();
      })
      $("#accessories").mouseleave(function(){
          $(".accessories_menu").hide();
      })
      $(".accessories_menu").mouseenter(function(){
       $(this).show();
      })
      $(".accessories_menu").mouseleave(function(){
       $(this).hide();
      })
             //---------------For offers Menu---------------------
             $("#offers").mouseenter(function(){
          $(".offers_menu").show();
      })
      $("#offers").mouseleave(function(){
          $(".offers_menu").hide();
      })
      $(".offers_menu").mouseenter(function(){
       $(this).show();
      })
      $(".offers_menu").mouseleave(function(){
       $(this).hide();
      })
//---------------For Search---------------------
      $("#search_icn").mouseenter(function(){
          $(".searcharea").show();
      })
      $("#search_icn").mouseleave(function(){
          $(".searcharea").hide();
      })
      $(".searcharea").mouseenter(function(){
       $(this).show();
      })
      $(".searcharea").mouseleave(function(){
       $(this).hide();
      })
     
       //---------------For User Accounts---------------------
      $("#useracc").mouseenter(function(){
          $(".useracc_menu").show();
      })
      $("#useracc").mouseleave(function(){
          $(".useracc_menu").hide();
      })
      $(".useracc_menu").mouseenter(function(){
       $(this).show();
      })
      $(".useracc_menu").mouseleave(function(){
       $(this).hide();
      })
      //---------------For Search---------------------
      $("#cart").mouseenter(function(){
          $(".cart_menu").show();
      })
      $("#cart").mouseleave(function(){
          $(".cart_menu").hide();
      })
      $(".cart_menu").mouseenter(function(){
       $(this).show();
      })
      $(".useracc_menu").mouseleave(function(){
       $(".cart_menu").hide();
      })


      // ------for Oneplus_store Toast-------
     $("#close_btn").click(function(){
       $("#toast1").hide();
       $("#toast2").show(1000);
     })
     $("#close_btn2").click(function(){
       $("#toast2").hide(1000);
     })
    })

           //  -----------------Highlights----------------------------
             
           $("#highlights").click(function(){
            $(".phone2_menu").hide();
            $(".highlights_menu").show();
            $(".tv2_menu").hide();
            $(".audio2_menu").hide();
            $(".accessories2_menu").hide();
          })
          $("#phone2").click(function(){
            $(".phone2_menu").show();
            $(".highlights_menu").hide();
            $(".tv2_menu").hide();
            $(".audio2_menu").hide();
            $(".accessories2_menu").hide();
          })
          $("#tv2").click(function(){
            $(".tv2_menu").show();
            $(".phone2_menu").hide();
            $(".highlights_menu").hide();
            $(".assesories2_menu").hide();
            $(".audio2_menu").hide();
          })
          $("#audio2").click(function(){
            $(".audio2_menu").show();
            $(".phone2_menu").hide();
            $(".highlights_menu").hide();
            $(".tv2_menu").hide();
            $(".accessories2_menu").hide();
            
          })
          $("#accessories2").click(function(){
            $(".accessories2_menu").show();
            $(".phone2_menu").hide();
            $(".highlights_menu").hide();
            $(".tv2_menu").hide();
            $(".audio2_menu").hide();
           
          })
          // ------for Oneplus_store Toast-------
          $("#close_btn").click(function(){
            $("#toast1").hide();
            $(".cookie_policy").show(1000);
          })
          $("#close_btn2").click(function(){
            $("#toast2").hide();
          })
         // -----hamburger For tab----
         $("#hamburger").click(function(){
            $(".mob_menu").toggle();
          })