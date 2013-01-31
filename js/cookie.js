function getCookie(c_name)
 {
 var i,x,y,ARRcookies=document.cookie.split(";");
 for (i=0;i<ARRcookies.length;i++)
   {
   x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
   y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
   x=x.replace(/^\s+|\s+$/g,"");
   if (x==c_name)
     {
     return unescape(y);
     }
   }
 }
 
function setCookie(c_name,value,exdays)
 {
 var exdate=new Date();
 exdate.setDate(exdate.getDate() + exdays);
 var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
 document.cookie=c_name + "=" + c_value;
 }
 
function checkCookie()
 {
 var username=getCookie("username");
 if (username!=null && username!="")
   {
		alert("Je naam is  " + username);
   }
 else 
	{
	username=prompt("Wat is je naam? ","");
	if (username!=null && username!="")
		 {
		 setCookie("username",username,365);
		 }
	}
 }
 
 function loaded()
{
	document.cookie = "v0=1;";
	document.cookie = "v1=2;";

	alert(document.cookie);
}

function deleteallcookies()  
 {  
var cookie = document.cookie;  
var arr = cookie.split("; ");  
var i;  
for(i=0;i<arr.length;i++)  
	 {  
	   temp = arr[i].split("=");  
	   setCookie(temp[0]);  
	 }  
 alert("De cookies zijn verwijdert")
}
