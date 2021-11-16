let HandlerDocuments = require('./manejadorDocumentos');
let handlerDocuments = new HandlerDocuments("rickandmorty.txt");
const axios = require("axios");


axios('https://rickandmortyapi.com/api/character')
    .then(response => {
        return response.data.results.filter(element => {
            return element.species === "Human";
        });
    })
    .then(response => JSON.stringify(response, null, 2))
    .then(async res => {
        await handlerDocuments.writeDocument(res);
        return res;
    })
    .then(async res => {
        let info = await handlerDocuments.readDocument(res);
        return JSON.parse(info);
    })
    .then(res => {
        let names = res.map(personaje => {
            return personaje.name;
        });
        
        handlerDocuments.writeDocument(names.join("\n"));
    })
    .finally(() => {
        handlerDocuments.appendDocument("\nTerminado...");
        
        setTimeout(() => {
            handlerDocuments.deleteDocument();
        }, 10000);
    })
;