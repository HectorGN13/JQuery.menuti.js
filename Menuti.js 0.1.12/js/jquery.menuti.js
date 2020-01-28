/**
 *
 */
(function ( $ ) {

    let methods = {

        init : function (options) {
            let settings = {
                responsive : true,
                menuID : "menu",
            };
            jQuery.extend(settings, options);
            if ($(this).length !== 0) {
                if ($("#"+settings.menuID)){
                    if (settings.responsive === true) {
                        jQuery(this).prepend("<input type=\"checkbox\" id=\"check\">" +
                            "<label class=\"icon-menu\" for=\"check\"></label>").append(`<nav id=${settings.menuID} class=\"menu\"><ul></ul></nav>`);
                    } else {
                        jQuery(this).append(`<nav id=${settings.menuID} class=\"menu\"><ul></ul></nav>`);
                    }
                } else {
                    alert("el id pasado por parametro existe intente ingresar otro id.")
                }
            } else {
                alert ("Ese id no existe dentro de tu DOM");
            }
        },

        addSection : function (options) {
            let settings = {
                elements : [],
                position : "after",
            };
            jQuery.extend(settings,options);
                if (settings.position === "after"){
                    for (let i = 0; i < settings.elements.length ; i++) {
                        jQuery(this).find('ul').append(`<li id='${$.trim(settings.elements[i].toLowerCase())}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                    }
                } else if (settings.position === "before") {
                    for (let i = 0; i < settings.elements.length ; i++) {
                        jQuery(this).find('ul').prepend(`<li id='${$.trim(settings.elements[i].toLowerCase())}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                    }
                } else {
                    alert('El parametro position no existe en jQuery.menuti' );
                }
        },

        delSection : function () {
            if (this.length > 0) {
                jQuery(this).remove();
            } else {
                alert("El elemento pasado por parametro no se encuentra.")
            }
        },

        addSubsection : function (options) {
            let settings = {
                elements : [],
                position : "after",
            };
            jQuery.extend(settings,options);
            let lock = true;
            for (let i = 0; i < settings.elements.length ; i++) {
                if ($('#'+settings.elements[i]).length) {
                    alert(`El id ${$.trim(settings.elements[i].toLowerCase())} está dentro de tu DOM, por favor, introduzca otro, o puede cambiar el id repetido en su documento html.`);
                    lock = false;
                }
            }
            if (lock === true) {
                if ($(this).length !== 0){
                    let selector = jQuery(this);
                    selector.hover(function () {
                        jQuery(this).children('ul').stop();
                        jQuery(this).children('ul').slideDown();
                    }, function() {
                        jQuery(this).children('ul').stop();
                        jQuery(this).children('ul').slideUp();
                    });
                    selector.append("<ul></ul>");
                    if (settings.position === "after"){
                        for (let i = 0; i < settings.elements.length ; i++) {
                            jQuery(this).find('ul').append(`<li id='${$.trim(settings.elements[i].toLowerCase())}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                        }
                    } else if (settings.position === "before") {
                        for (let i = 0; i < settings.elements.length ; i++) {
                            jQuery(this).prepend(`<li id='${$.trim(settings.elements[i].toLowerCase())}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                        }
                    } else {
                        alert('El parametro position no existe en jQuery.menuti' );
                    }
                } else {
                    alert('El elemento padre no existe en tu DOM' );
                }
            }
        },

        addLogo : function (link) {
            jQuery(this).prepend(`<img src="${link}" alt="logo_image">`);
        },
        addTitle : function (title) {
            jQuery(this).prepend(`<h2>${title}</h2>`);
        },
        addIcon : function (icon_class) {
            jQuery(this).find('span').addClass(icon_class);
        },
    };

    jQuery.fn.menuti = function( method ) {
        // Si existe la función la llamamos
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call
            ( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            //Si no se pasa ningún parámetro o el parámetro es
            //un objeto de configuración llamamos al inicializador
            return methods.init.apply( this, arguments );
        } else {
            //En el resto de los casos mostramos un error
            alert('La función ' + method + ' no existe en jQuery.menuti' );
        }
    };

}( jQuery ));