# Guía de usuario

Guía rápida para comenzar a usar Menuti.js


## Cargar Menuti.js en nuestro script

Carga menuti.js dentro de tu script utilizando la funcion `$().menuti('init')`.

~~~
<!--Example code-->
<script type="text/javascript">
	$(document).ready(function () {
		$().menuti('init');
	});
</script>
~~~


Por defecto menuti.js inyectara el codigo html dentro de un `<div>` con id "content-menu". Por ello es necesario crear previamente detro de nuestro archivo .html un elemento div con id="content-menu".
 

`<div id="content-menu"></div>`

A continuacion se muestra un pequeño fragmento de código a modo de ejemplo:

~~~
<body>
    <header>
        <div id="content-menu" class="content-menu"></div>
    </header>
</body>
~~~


Aunque también puedes colocar los menus donde lo necesites, siempre y cuando previamente modifiques el contenido dentro de tu archivo .html y luego indiques por parametros a la función init donde deseas crear tu menú. 


A continuación se muestra un ejemplo de como realizarlo.

~~~
<!--Archivo html-->
<body>
    <header>
        <div id="example-container"></div>
    </header>
</body>
~~~


~~~
//Archivo js

//Variable de configuración
var initSettings = {
        menuID : "example-container"
};

$().menuti('init', initSettings);

~~~
***


## Métodos y utilización.



### init

Este método inicia menuti.js y deja todo preparado para que podamos añadir secciones a nuestro menú.
Cuenta con dos parámetros que podremos añadir a la variable settings.

- **responsive**

Este parámetro nos permitirá la creación de un responsivo. 


Cuenta con dos valores: `true` por defecto, o `false` en el caso que no queramos que nuestro menú se comporte de forma responsiva.


- **menuID**

Este parámetro se utiliza para indicar donde queremos colocar nuestro menú.

\*Recuerda que deberemos colocar nuestro menú dentro de etiquetas `<div>` y su id será el valor que hemos pasado por parámetro.


Por defecto el valor de **menuID** es "content-menu".


***


~~~
//Archivo js

//Variable de configuración
var initSettings = {
        responsive: false,
        menuID : "example-container"
};

$().menuti('init', initSettings);

~~~


### addSection


Este es el método utilizado para agregar secciones a nuestro menú.


Cuenta con dos claves que podemos añadir a nuestra variable settings.

- **elements**

Esta clave es un array en el que añadiremos todos los elementos de nuestro menú.


Cuando nuestro menú esté creado el id de cada elemento será el mismo aunque en minúsculas y con los espacios omitidos.

- **position**

Sirve para indicar a nuestro pluging donde queremos añadir nuestro menú si antes o despues. Este parametro podría sernos útil si en un futuro queremos añadir mas elementos a nuestro menú por lo que podremos elegir su posición.


Los dos parametros posibles son los siguientes `after` (por defecto) o `before`.


***



~~~
//Archivo js

//Variable de configuración
var addSectionSettings = {
        elements : [" INICIO", " SERVICIO", " PRODUCTOS", " BLOG", " CONTACTOS"],
        position : "after",
};

$().menuti('addSection', addSectionSettings);

~~~ 


### delSection


Este método sirve para eliminar secciones y subsecciones. 


Para utilizar este método es necesario pasarle por parametro el id del elemento `<li>` que queremos eliminar.


***


~~~
//Archivo js

//Variable de configuración
$().menuti('delSection', 'li_id');

~~~ 

### addSubsection


Este método añadirá una o varias subseccion/es al elemento que queramos, para ello deberemos pasar a la variable de configuración el elemento padre al que le deseamos agregar subsecciones y dichas subsecciones. Además podemos elegir la posición donde deseamos agregar los elementos.


Las tres claves que debemos añadir a nuestra variable de configuración será las siguientes.


- **father**


En esta clave deberemos colocar el "id" del elemento del menú al que le deseamos añadir nuestro submenú.


Si no existe la página mostrará un mensaje de error indicando que ese elemento no se encuentra dentro del DOM.


- **elements**


Esta clave es un array en el que añadiremos todos los elementos de nuestro submenú.


Cuando nuestro submenú esté creado el id de cada elemento será el mismo aunque en minúsculas y con los espacios omitidos.
 


- **position**

Sirve para indicar a nuestro pluging donde queremos añadir nuestro submenú, si antes o despues. Este parametro podría ser útil si en un futuro queremos añadir más elementos a nuestro submenú por lo que podremos elegir su posición dentro del menú.


Los dos parametros posibles son los siguientes `after` (por defecto) o `before`.


***



~~~
//Archivo js

//Variable de configuración
var addSubsectionSettings = {
        father : "servicio",
        elements : ["Vehiculos de ocasión", "Renting", "Nuevos modelos"],
        position : "after",
};

$().menuti('addSubsection', addSubsectionSettings);

~~~ 


### addLogo


Este método sirve para añadir un logo a nuestro menú (si lo deseamos), para ello solo necesitaremos pasar por parametros la ruta del archivo img que deseamos colocar.


***


~~~
//Archivo js

$().menuti('addLogo', "./img/logo.jpg");

~~~ 


### addTitle


Este método sirve para añadir un título a nuestro menú (si lo deseamos), para ello solo necesitaremos pasar por parametros el título que deseamos para nuestro documento.


\*El titulo será un `<h2>`.

***


~~~
//Archivo js

$().menuti('addTitle', "Empresa S.L.");

~~~ 


### addIcon


Con este método podemos añadir iconos a los elementos de nuestro menu. Para ello, antes necesitaremos tener en nuestro proyecto algún archivo .css de iconos (como por ejemplo fontello).


Este método necesita dos parametros, el primero sería el "id" del elemento al que le queremos añadir el icono, el segundo la clase de dicho icono.


\* Hay que recordar que la clase del icono debe coincidir con la clase del archivo .css de iconos que hemos añadido a nuestro proyecto.


***


~~~
//Archivo js

$().menuti('addIcon', "home", "icon-home");

~~~ 

