function cancel()
{
   window.location="admin.htm";
   alert("PROFILE REJECTED");
   return false;
  
}
function validate()
{ 
   
   if (confirm("Are Your Sure"))
   {
   window.location="admin.htm";
   alert("PROFILE ACCEPTED SUCCESSFULLY");
   return false;
   }
   else
   return false;
}