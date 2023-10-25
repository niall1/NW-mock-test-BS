import { NightwatchBrowser } from "nightwatch";

export const updateTestName = (browser: NightwatchBrowser, name: string) => {
    const isBrowserstack = process.env.IS_BROWSERSTACK?.trim()
    if(isBrowserstack === 'true'){
        const payload = JSON.stringify({"action": "setSessionName", "arguments": {"name": name} })
        browser.executeScript(`browserstack_executor: ${payload}`);
    }
}