function createApp(header, body, footer, date){
    this.header = header;
    this.body = body;
    this.footer = footer;
    this.date = date;

    this.editAppMethod = function(){
        this.header = prompt("type App name");
        this.body = prompt("type App body");
        this.footer = prompt("type App footer");
        this.date  = prompt("type App date");
    }
}

function createDocument(header, body, footer, date){
    this.header = header;
    this.body = body;
    this.footer = footer;
    this.date = date;
    this.app = new createApp(header + "_App", body + "_App", footer + "_App", date + "_App");

    this.editDocument = function(){
        this.header = prompt("type name");
        this.body = prompt("type body");
        this.footer = prompt("type footer");
        this.date  = prompt("type date");
    }
    this.editApp = function(){
        this.app.editAppMethod();
    }
}

let documentObj = new createDocument("Header", "Body", "Footer", "Date");

documentObj.editDocument()
console.log(documentObj);
documentObj.editApp()
console.log(documentObj.app);