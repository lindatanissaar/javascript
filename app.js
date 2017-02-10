//luuakse muutuja g, millele omistatakse uus loodud objekt
var g = G$('John', 'Doe');

//kutsutakse meetodit greet ning keeleks määratakse hispaania keel
g.greet().setLang('es').greet(true).log();


// obkjekti kasutatakse pärast seda kui on sisse logitud
$('#login').click(function() {

    // loob uue Greetr objekti
    var loginGrtr = G$('John', 'Doe');

    // peidab login divi ekraanilt
    $('#logindiv').hide();

    // vastavalt keelele, saadetakse tervitus ja logitakse kasutaja sisse
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});