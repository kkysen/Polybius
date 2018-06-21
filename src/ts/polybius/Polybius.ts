import {addDownloadListener} from "./downloadListener";
import {reactMain} from "./Rules";
import {addSampleRules} from "./sampleRules";
import {addExtensions} from "../util/extensions/allExtensions";


const main = function(): void {
    addExtensions();
    // loadExample();
    addSampleRules();
    addDownloadListener();
    reactMain();
};

main();