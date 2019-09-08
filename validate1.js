function cancel()
{
   window.location="student.htm";
   alert("UPDATE REQUEST CANCELLED");
   return false;
  
}
function validate()
{ 
   
   if (confirm("Are Your Sure"))
   {
   window.location="student.htm";
   alert("REQUEST SUBMITTED FOR UPDATION");
   return false;
   }
   else
   return false;
}