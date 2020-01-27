$(document).ready(function () {
    $(window).scroll(function () {
       if($(window).scrollTop() > 100) {
           $('header').addClass('header2');
       } else {
           $('header').removeClass('header2');
       }
    });

    let initSettings = {
        responsive : true,
        menuID : "content-menu2"
    };

    let addSectionSettings = {
        elements : [" INICIO", " SERVICIO", " PRODUCTOS", " BLOG", " CONTACTOS"],
    };

    let addSubsectionSettings2 = {
        father : "servicio",
        elements : ["Atención al cliente", "Presupuestos", "Financiación"]
    };

    let addSubsectionSettings3 = {
        father : "productos",
        elements : ["Vehiculos de ocasión", "Renting", "Nuevos modelos"]
    };

    $().menuti('init', initSettings);
    $().menuti('addSection', addSectionSettings);
    $().menuti('addLogo', "./img/logo.jpg");
    $().menuti('addTitle', "Empresa S.L.");
    $().menuti('addIcon', "inicio", "icon-home");
    $().menuti('addIcon', "servicio", "icon-suitcase");
    $().menuti('addIcon', "productos", "icon-diamond");
    $().menuti('addIcon', "blog", "icon-bookmark");
    $().menuti('addIcon', "contactos", "icon-phone");
    $().menuti('addSubsection', addSubsectionSettings2);
    $().menuti('addSubsection', addSubsectionSettings3);

});

