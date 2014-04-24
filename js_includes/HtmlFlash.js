/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "HtmlFlash",
    
jqueryWidget: {
    _init: function () {
        //this.options._cssPrefix = "HtmlFlash-";
        //this.cssPrefix = this.options._cssPrefix;
        //this.options.transfer = null; // Remove 'click to continue message'.
        //this.options._dashed = true;
        var opts = {
            options: this.options,
            triggers: [1],
            children: [
                "FlashSentenceBis", this.options,
                "SubHtmlFlash", this.options
            ]
        };
        this.element.VBox(opts)
    }
},

properties: {}
});

