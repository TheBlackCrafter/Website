function controleer(help)
{
  if(help.naam.value == "")
  { alert("Je hebt bij Voornaam niks ingevuld."); }
  if(help.leeftijd.value == "----" || help.leeftijd.value < 8)
  { alert("Je hebt bij Leeftijd niks geldigs ingevoerd."); }
  if(help.email.value =="" || help.email.value.indexOf("@") == -1)
  { alert("Dit e-mailadres is niet geldig."); }
  if(help.bericht.value =="" || help.email.value == "Zet hier je vraag neer.")
  { alert("Er is geen bericht ingevuld."); }
  //Zelf Gemaakt/\   :D     :D      :D
}