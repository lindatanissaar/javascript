/**
 * Created by Linnu on 10.02.2017.
 */
//luuakse IIFE funktsioon, millel on kaks parameetrit (global, $)
// parameetritele antakse väärtused window ja jQUery
//viimases polnud muutuseid
(function(global, $) {
    //luuakse objekt, selleks et ei peaks kasutama keyword new'd kogu aeg
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    //luuakse tühi objekti prototüüp
    Greetr.prototype = {};

    //luuakse järjend keeltele (inglise keel ja hispaania keel)
    var supportedLangs = ['en', 'es'];

    //luuakse greetings objekt (nimi:väärtus paaridena)
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //luuakse formalGreetings objekt (nimi:väärtus paaridena)
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //luuakse logMessages objekt (nimi:väärtus paaridena)
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };


    //meetodid
    Greetr.prototype = {

        //luuakse fullName meetod, mis väljastab alati eesnime + perenime
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        //luuakse valideerimise meetod; vaatab, kas konkreetne keel on toetatud, kui mitte, väljastab errori
        validate: function() {
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        //luuakse meetod greeting, mis tagastab konkreetsest keeles tervituse koos eesnime ja hüüumärgiga
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        //luuakse meetod formalGreeting, mis tagastab konkreetsest keeles tervituse koos täispika nimega
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },


        //kui console objekt on olemas (true), kirjutab konsooli vastava sõnumi
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        //valideeritakse keel
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }
        // luuakse funktsioon HTMLGreeting, millel on kaks parameetrit
        HTMLGreeting: function(selector, formal) {

            // kui jqueryt ei leita, väljastab errori
            if (!$) {
                throw 'jQuery not loaded';
            }

            // kui selektorit ei ole, väljastab errori
            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // vaatab, kas tervitus on formaalne või mitte
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // selektor antakse edasi jquery objektile
            $(selector).html(msg);

            return this;
        }

    };

    //luuakse funktsioon, millel on kolm parameetrit(firstName, lastName, language)
    Greetr.init = function(firstName, lastName, language) {

        //kasutatakse keyword this'i, et vältida nn this bugi
        var self = this;
        //omistatakse väärtused
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    //viidatakse objektidele
    Greetr.init.prototype = Greetr.prototype;

    //greetr muudetakse globaalseks
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

