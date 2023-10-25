"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockTest = {
    'Mock Test': (browser) => {
        browser.mockNetworkResponse('https://www.google.com/', {
            status: 200,
            headers: {
                'Content-Type': 'UTF-8'
            },
            body: 'Hello there!'
        })
            .navigateTo('https://www.google.com/')
            .pause(2000);
    },
    after: (browser) => browser.end()
};
exports.default = mockTest;
