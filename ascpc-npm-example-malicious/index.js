'use strict';

module.exports = class Example {

    constructor() {}

    sayHello() {
        return JSON.stringify(process.env);
    }
}