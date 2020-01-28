# Guia de estilo


Esto es una pequeña guía, para facilitar a los diseñadores que busquen personalizar el menú generado por Menuti.js.


Menuti.js es compatible con .css y bootstrap, en los siguientes puntos se explicará su utilización.


## CSS


Es la parte más fácil, ya que se detallarán las clases y los ids que Menuti.js genera en el archivo .html para ello solo deberás configurarlas en tu archivo .css o en la etiqueta `<style>` dentro de tu archivo .html.


### Opción responsive


Si elegimos esta opción Menuti.js generará una serie de elementos:


~~~
<input type="checkbox" id="check">
<label class="icon-menu" for="check"></label>
<nav id="menu" class="menu">
<ul></ul>
</nav>
~~~


### addSection y addSubsection

Cuando se añade una sección se genera el siguiente codigo:


~~~
<li id="home"><a href="#"><span></span> HOME </a></li>
~~~


## Bootstrap


Esta opción es un poco más complicada ya que para ello necesitaremos algo de conocimientos en JQuery.


En un primer momento deberemos añadir Bootstrap a nuestro proyecto, si no sabes como hacerlo puedes visitar el siguiente [link][Bootstrap] que te redirecionará a la página de documentacion de Bootstrap.

[Bootstrap-Documentation][Bootstrap]
[Bootstrap]:https://getbootstrap.com/docs/4.4/getting-started/introduction/


Una vez realizado este paso necesitaremos añadir las clases de bootstrap a los elementos que deseemos. A continuación un ejemplo de como deberiamos de realizar esta acción:


~~~
$("nav").addClass("navbar navbar-dark bg-dark");
~~~

