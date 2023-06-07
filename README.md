On/Off Switch
Este es un ejemplo de una página web que muestra un interruptor de encendido/apagado (on/off switch). Al hacer clic en el interruptor, cambia de estado y muestra el texto "ON" u "OFF" según corresponda.

Funcionalidad
Al hacer clic en el interruptor, se ejecuta la función change() que realiza lo siguiente:

Obtiene el elemento con el ID "light-text" que muestra el texto actual del interruptor.
Si el texto es "OFF", lo cambia a "ON". Si el texto es "ON", lo cambia a "OFF".
Agrega o elimina la clase CSS "lights-on" en el elemento body, lo que cambia el color de fondo de la página.
Estilos CSS
El archivo styles.css contiene los estilos utilizados para el interruptor y la apariencia de la página. Aquí se incluyen algunos detalles de los estilos utilizados:

El body tiene una altura y anchura del 100% y utiliza un fondo de color #ffb830.
El interruptor está contenido en un elemento <div> con la clase CSS "wrap".
El interruptor utiliza la clase CSS "switch" y tiene un tamaño definido.
Se utiliza una transición para animar el cambio de color del interruptor cuando se activa o desactiva.
Cuando el interruptor está activado (input:checked), se cambia el color de fondo y se desplaza el botón del interruptor hacia la derecha.
Archivos adicionales
El archivo switch.js contiene la implementación de la función change() utilizada para cambiar el estado del interruptor.
También se incluyen enlaces a scripts y hojas de estilo externas relacionadas con las cookies y las estadísticas web.
¡Eso es todo! Ahora tienes una descripción básica del proyecto y cómo funciona. Puedes expandir el README según sea necesario para incluir más detalles, instrucciones de instalación, información sobre el desarrollo y cualquier otra cosa relevante para tu proyecto.
