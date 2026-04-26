function checkpassword(){
  const correctpass="12345"
  let userpass= document.getElementById("pass").value
  if(user===correctpass)
  document.getElementById("results").innerHTML ="Access granted"
  else
  document.getElementById("results").innerHTML="Access denied"
}