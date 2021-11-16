const fs = require("fs");

class HandlerDocuments {
    constructor(url) {
        this.url = url;
    }

    async readDocument() {
        try {
            return await fs.promises.readFile(this.url, "utf-8");
            
        } catch (error) {
            console.error(error);
        }
    }

    async writeDocument(data) {
        try {
            return await fs.promises.writeFile(this.url, data);
        } catch (error) {
            console.error(error);
        }
    }

    async appendDocument(data) {
        try {
            return await fs.promises.appendFile(this.url, data);
        } catch (error) {
            console.error(error);
        }
    }

    async deleteDocument() {
        try {
            return await fs.promises.unlink(this.url);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = HandlerDocuments;