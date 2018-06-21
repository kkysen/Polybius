"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const downloadListener_1 = require("./downloadListener");
const Rules_1 = require("./Rules");
const sampleRules_1 = require("./sampleRules");
const allExtensions_1 = require("../util/extensions/allExtensions");
const main = function () {
    allExtensions_1.addExtensions();
    // loadExample();
    sampleRules_1.addSampleRules();
    downloadListener_1.addDownloadListener();
    Rules_1.reactMain();
};
main();
//# sourceMappingURL=Polybius.js.map