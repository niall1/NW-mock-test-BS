"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTestName = void 0;
const updateTestName = (browser, name) => {
    var _a;
    const isBrowserstack = (_a = process.env.IS_BROWSERSTACK) === null || _a === void 0 ? void 0 : _a.trim();
    if (isBrowserstack === 'true') {
        const payload = JSON.stringify({ "action": "setSessionName", "arguments": { "name": name } });
        browser.executeScript(`browserstack_executor: ${payload}`);
    }
};
exports.updateTestName = updateTestName;
