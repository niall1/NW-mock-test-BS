import { NightwatchTests, NightwatchBrowser } from 'nightwatch';

const mockTest : NightwatchTests = {
    'Mock Test': (browser: NightwatchBrowser) => {
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

    after: (browser: NightwatchBrowser) => browser.end()
}

export default mockTest;