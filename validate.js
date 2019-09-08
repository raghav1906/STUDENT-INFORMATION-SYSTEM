function validate()
{ 
   if( document.StudentRegistration.Name.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.Name.focus() ;
     return false;
   }
   if( document.StudentRegistration.Father_Name.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.StudentRegistration.Father_Name.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.Birthday_Day.value == "-1" )
   {
     alert( "Please provide your Birth date!" );
     document.StudentRegistration.Birthday_Day.focus() ;
     return false;
   }   
   if( document.StudentRegistration.Birthday_Month.value == "-1" )
   {
     alert( "Please provide your Birthday Month!" );
    document.StudentRegistration.Birthday_Month.focus() ;
     return false;
   }   
   if( document.StudentRegistration.Birthday_Year.value == "-1" )
   {
     alert( "Please provide your Select Birthday Year!" );
document.StudentRegistration.Birthday_Year.focus() ;    
     return false;
   }   
 var email = document.StudentRegistration.Email_Id.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if (email == "" || atpos < 1) 
  {
     alert("Please enter correct email ID")
     document.StudentRegistration.Email_Id.focus() ;
     return false;
  }
   if( (document.StudentRegistration.Mobile_Number.value == "") ||
           (isNaN( document.StudentRegistration.Mobile_Number.value))||document.StudentRegistration.Mobile_Number.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.Mobile_Number.focus() ;
     return false;
   }
   if ( ( StudentRegistration.Gender[0].checked == false ) && ( StudentRegistration.Gender[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }  
   if( document.StudentRegistration.Address.value == "" )
   {
     alert( "Please provide your Address!" );
     document.StudentRegistration.Address.focus() ;
     return false;
   }
   if( document.StudentRegistration.City.value == "" )
   {
     alert( "Please provide your City!" );
     document.StudentRegistration.City.focus() ;
     return false;
   }
  if( document.StudentRegistration.Pin_Code.value == "" ||
           isNaN( document.StudentRegistration.Pin_Code.value) ||
           document.StudentRegistration.Pin_Code.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.StudentRegistration.Pin_Code.focus() ;
     return false;
   }   
   if( document.StudentRegistration.State.value == "" )
   {
     alert( "Please provide your State!" );
 document.StudentRegistration.State.focus() ;        
 return false;
   }
   if( document.StudentRegistration.Country.value == "" )
   {
     alert( "Please provide your Country!" );
 document.StudentRegistration.State.focus() ;        
 return false;
   }
   if( document.StudentRegistration.Height.value == "" )
   {
     alert( "Please provide your Height!" );
 document.StudentRegistration.Height.focus() ;        
 return false;
   }
   if( document.StudentRegistration.Weight.value == "" )
   {
     alert( "Please provide your Weight!" );
     document.StudentRegistration.Weight.focus() ;        
     return false;
   }
   
   if (confirm("Are Your Sure"))
   {
   window.location="admin.htm";
   alert("SUBMITTED SUCCESSFULLY");
   return false;
   }
   else
   return false;
}