function controleer(contact)
{

  if(contact.naam.value == "")
  { alert("Je hebt niks ingevuld."); }

  if(contact.leeftijd.value < "18" || contact.leeftijd.value > "65")
  { alert("Je hebt als leeftijd "+contact.leeftijd.value+" jaar opgegeven. Dit is geen correcte waarde."); }

  if(contact.email.value =="" || contact.email.value.indexOf("@") == -1)
  { alert("Dit e-mailadres is niet geldig."); }

  if(contact.opmerkingen.value.length > "30")
  { alert ("Uw opmerking is te lang."); }

}