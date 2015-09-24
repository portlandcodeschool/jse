

var TextModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    urlRoot: '/texts',
    fetch : function() {
        var myID = this.get('id');
        if (myID===undefined) {
            console.log('Model has no id!');
            return;
        }
        var urlRoot = this.urlRoot ||
                    (this.collection && this.collection.url);
        var url = this.urlRoot + '/' + myID;
        $.get(url).done(function(reply){
            console.log(reply);
            this.attributes = reply;
        })
    },
    save: function() {
        var myID = this.get('id');
        var urlRoot = this.urlRoot ||
            (this.collection && this.collection.url);

        if (typeof myID === 'number') {
            var url = urlRoot + '/' + myID;
            $.ajax(url,{method:'PUT',data:this.attributes})
                .done(function(reply){
                    console.log('got reply:',reply);
                })
        } else {
            var self = this;
            $.ajax(urlRoot,{method:'POST',data:this.attributes})
                .done(function(reply){
                    console.log('got reply:',reply);
                    self.set(reply);
                })
        }
    },
    initialize : function () {
        //this.fetch();
    },    
    replace : function (str) {
        this.set("value", str);
        this.save();
    }
});


/*
var TextCollection = Backbone.Collection.extend({
    model : TextModel,
    url : "/texts",

    initialize: function () {
        this.fetch();
    }
});

var textCollection = new TextCollection();
*/
