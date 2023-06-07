/*Obtiene el elemento con el ID "light-text" que muestra el texto actual del interruptor.
Si el texto es "OFF", lo cambia a "ON". Si el texto es "ON", lo cambia a "OFF".
Agrega o elimina la clase CSS "lights-on" en el elemento body, lo que cambia el color de fondo de la página.
*/
function change(){
    var x=document.getElementById('light-text');
    console.log("entrando en el chage");
    if (x.innerHTML==="OFF" ){
    x.innerHTML="ON";
    }else{
        x.innerHTML="OFF";
    }
    var element=document.body;
    element.classList.toggle("lights-on");
    }