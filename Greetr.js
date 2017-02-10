/**
 * Created by Linnu on 10.02.2017.
 */
//luuakse IIFE funktsioon, millel on kaks parameetrit (global, $)
// parameetritele antakse väärtused window ja jQUery

(function(global, $) {
    //luuakse objekt, selleks et ei peaks kasutama keyword new'd kogu aeg
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    //luuakse tühi objekti prototüüp
    Greetr.prototype = {};

    //luuakse funktsioon, millel on kolm parameetrit(firstName, lastName, language)
    Greetr.init = function(firstName, lastName, language) {

        //kasutatakse keyword this'i, et vältida nn this bugi
        var self = this;
        //omistatakse väärtused
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    //viidatakse objektidele
    Greetr.init.prototype = Greetr.prototype;

    //greetr muudetakse globaalseks
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));




