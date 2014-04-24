define_ibex_controller({
name: "HtmlFlashFB",
    
jqueryWidget: {
    _init: function () {
        //this.options._cssPrefix = "HtmlFlashFB-";
        //this.cssPrefix = this.options._cssPrefix;
        //this.options.transfer = null; // Remove 'click to continue message'.
        //this.options._dashed = true;
        var opts = {
            options: this.options,
            triggers: [0],
            children: [
                "FlashSentenceTer", this.options,
                "SubHtmlFlashFB", this.options
            ]
        };
        this.element.VBox(opts)
    }
},

properties: {}
});

