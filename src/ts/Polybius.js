"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("./example");
const DownloadRouter_1 = require("./polybius/DownloadRouter");
const Options_1 = require("./polybius/Options");
const allExtensions_1 = require("./util/extensions/allExtensions");
const main = function () {
    allExtensions_1.addExtensions();
    example_1.loadExample();
    Options_1.reactMain();
    DownloadRouter_1.f();
};
main();
//# sourceMappingURL=Polybius.js.map