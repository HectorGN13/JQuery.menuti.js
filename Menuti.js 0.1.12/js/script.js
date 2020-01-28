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
        menuID : "menu2"
    };

    let addSectionSettings = {
        elements : [" INICIO", " SERVICIO", " PRODUCTOS", " BLOG", " CONTACTOS"],
    };

    let addSectionSettings2 = {
        elements : [" PEPE", " MARI", " JUANI"],
    };


    let addSubsectionSettings2 = {
        elements : ["Atención al cliente", "Presupuestos", "Financiación"]
    };

    let addSubsectionSettings3 = {
        elements : ["Vehiculos de ocasión", "Renting", "Nuevos modelos"]
    };

    let addSubsectionSettingsPepe = {
        elements : ["Garcia", "Molina"]
    };

    let addSubsectionSettingsMari = {
        elements : ["Gonzalez", "Narvaez"]
    };

    let addSubsectionSettingsJuani = {
        elements : ["Gomez", "Zuleta"]
    };

    $('#content-menu').menuti('init', initSettings);
    $('#menu2').menuti('addSection', addSectionSettings);
    $('#menu2').menuti('addLogo', "./img/logo.jpg");
    $('#menu2').menuti('addTitle', "Empresa S.L.");
    $('#inicio').menuti('addIcon', "icon-home");
    $('#servicio').menuti('addIcon', "icon-suitcase");
    $('#productos').menuti('addIcon', "icon-diamond");
    $('#blog').menuti('addIcon', "icon-bookmark");
    $('#contactos').menuti('addIcon', "contactos", "icon-phone");
    $('#servicio').menuti('addSubsection', addSubsectionSettings2);
    $('#productos').menuti('addSubsection', addSubsectionSettings3);


    $('#div1').menuti('init');
    $('#menu').menuti('addSection',addSectionSettings2);
    $('#pepe').menuti('addSubsection', addSubsectionSettingsPepe);
    $('#mari').menuti('addSubsection', addSubsectionSettingsMari);
    $('#juani').menuti('addSubsection', addSubsectionSettingsJuani);

});

