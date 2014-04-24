define_ibex_controller({
name: "SubHtmlFlashFB",
    
jqueryWidget: {
    _init: function () {
        //this.options._cssPrefix = "HtmlFlash-";
        //this.cssPrefix = this.options._cssPrefix;
        this.options.transfer = null; // Remove 'click to continue message'.
        //this.options._dashed = true;
        var subOpts = {
            options: this.options,
            triggers: [1],
            children: [
                "Message", this.options,
                "SeparatorTer", this.options
            ]
        };
        this.element.VBox(subOpts)
    }
},

properties: {}
});
