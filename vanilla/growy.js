/* @constructor to make a textarea grow while you type
 * @param {DOMElement} elem
 * @return {DOMElement} textarea that is infected
 */
var Growy = function (elem) {
    this.elem = elem.tagName.toLowerCase() === "textarea" && elem;

    // validate element
    if (!this.elem) {
        window.console && console.log("element is not a textarea: ", elem);
        return;
    }

    // add functionality
    this.initialize();
};

Growy.prototype = {

    initialize : function () {
        var self = this;
        this.elem.onkeyup = function () {
            self.handleKeyUp.call(self);
        };
    },

    manageHeight : function () {
        var elem = this.elem,
            height = elem.clientHeight,
            scrollHeight = elem.scrollHeight;

        if (height < scrollHeight) {
            elem.style.height = scrollHeight + 'px';
        }
    },

    handleKeyUp : function () {
        var self = this,
            timer = this.timer;

        if (timer) {
            setTimeout(timer);
        }
        timer = setTimeout(function () {
            self.manageHeight.call(self);
        }, 100);
    }

};

