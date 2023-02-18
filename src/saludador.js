const nombre = document.querySelector("#nombre");
const genero=document.querySelector("#genero");
const idioma=document.querySelector("#idioma");
const edad=document.querySelector("#edad");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let gen;
  let saludoXHora;

  if(idioma.value=="ES"){
    if(horaActual>=6 && horaActual <12){
      saludoXHora="buenos dias";
    }
    else {
      if(horaActual>=12 && horaActual<19){
        saludoXHora="buenas tardes";
      }
      else{
        saludoXHora="buenas noches";
      }
    }
    if(genero.value=="Hombre")
    {
      if(edad.value<=30){
        gen="Joven ";}
      else {
        gen="Sr. ";}
    }
    else{
      if(edad.value<=30){
        gen="Srta. ";}
      else {
        gen="Sra. ";}
    }
    div.innerHTML = "<p><b> Hola </b> " +saludoXHora + " " + gen + nombre.value + "</p>";
  }
  else{
    if(horaActual>=6 && horaActual <12){
      saludoXHora="good morning";}
    else{
      if(horaActual>=12 && horaActual<19){
        saludoXHora="good afternoon";}
      else{
        saludoXHora="good night";}
    }
    if(genero.value=="Hombre"){
      if(edad.value<=30){
        gen="Guy ";}
      else {
        gen="Mr. ";}
    }
    else{
      if(edad.value<=30){
        gen="Miss ";
      }
      else
      {
        gen="Mrs. ";}
    }
    div.innerHTML = "<p><b> Hello </b> " +saludoXHora + " " + gen + nombre.value + "</p>";   
  }
});
