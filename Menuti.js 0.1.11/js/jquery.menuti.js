/**
 *
 */
(function ( $ ) {

    let methods = {

        init : function (options) {
            let settings = {
                responsive : true,
                menuID : "content-menu"
            };
            jQuery.extend(settings, options);
                if (settings.responsive === true) {
                    jQuery(`.${settings.menuID}`).prepend("<input type=\"checkbox\" id=\"check\">" +
                        "<label class=\"icon-menu\" for=\"check\"></label>").append("<nav class=\"menu\"><ul></ul></nav>");
                } else {
                    jQuery(`.${settings.menuID}`).append("<nav class=\"menu\"><ul></ul></nav>");
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
                        jQuery("nav.menu ul").append(`<li id='${$.trim(settings.elements[i].toLowerCase())}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                    }
                } else if (settings.position === "before") {
                    for (let i = 0; i < settings.elements.length ; i++) {
                        jQuery("nav.menu ul").prepend(`<li id='${$.trim(settings.elements[i].toLowerCase())}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                    }
                } else {
                    alert('El parametro position no existe en jQuery.menuti' );
                }
        },

        delSection : function (li_id) {
            if (`#${li_id}`.length > 0) {
                jQuery(`nav.menu ul #${li_id}`).remove();
            } else {
                alert("El elemento pasado por parametro no se encuentra.")
            }
        },

        addSubsection : function (options) {
            let settings = {
                father : "",
                elements : [],
                position : "after",
            };
            jQuery.extend(settings,options);
            if ($(`#${settings.father}`).length !== 0){
                let father = settings.father;
                let selector = jQuery(`#${father}`);
                selector.hover(function () {
                    $(this).children('ul').stop();
                    $(this).children('ul').slideDown();
                }, function() {
                    $(this).children('ul').stop();
                    $(this).children('ul').slideUp();
                });
                selector.append("<ul></ul>");
                if (settings.position === "after"){
                    for (let i = 0; i < settings.elements.length ; i++) {
                        jQuery(`#${settings.father} ul`).append(`<li id='${settings.elements[i]}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                    }
                } else if (settings.position === "before") {
                    for (let i = 0; i < settings.elements.length ; i++) {
                        jQuery(`#${settings.father}`).prepend(`<li id='${settings.elements[i]}'><a href='#'><span></span>${settings.elements[i]}</a></li>`)
                    }
                } else {
                    alert('El parametro position no existe en jQuery.menuti' );
                }
            } else {
                alert('El elemento padre no existe en tu DOM' );
            }
        },

        addLogo : function (link) {
            jQuery("#content-menu").prepend(`<img src="${link}" alt="logo_image">`);
        },
        addTitle : function (title) {
            jQuery("#content-menu").prepend(`<h2>${title}</h2>`);
        },
        addIcon : function (li_id, icon_class) {
            jQuery(`#${li_id} span`).addClass(icon_class);
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