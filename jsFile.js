window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    
    function validateform(){  
        var name=document.myform.name.value;
        var email=document.myform.email.value;
        var password=document.myform.password.value;
        var num=document.myform.num.value;  
          
        if (name==""){  
          alert("Name can't be blank");  
          return false;  
        }else if(password.length<6){  
          alert("Password must be at least 6 characters long.");  
          return false;  
          }
          else if(email==""){  
            alert("E-mail can't be blank");  
            return false;  
            }
          else if(message==""){  
          alert("Message can't be blank");  
          return false;  
          }
          /* else if(num==""){  
          document.getElementById("numloc").innerHTML="Enter Numeric value only";  
          return false;  
          } */
          else{  
          return true;  
          }
        }