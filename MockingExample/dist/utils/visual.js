"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percySnapshot = void 0;
const percySnapshot = (browser, name) => {
    var _a;
    const isVisual = (_a = process.env.IS_VISUAL) === null || _a === void 0 ? void 0 : _a.trim();
    if (isVisual === 'true') {
        browser.percySnapshot(name);
    }
};
exports.percySnapshot = percySnapshot;
