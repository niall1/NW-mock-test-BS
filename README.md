# NW-mock-test-BS

Before running tests against BrowserStack you must add you BrowserStack user and access key to the browserstack and browserstack.local DesiredCapabilites in the nightwatch.conf.js file. After adding the credentials open a terminal in the root folder of the project and run nmp ci to download the node modules. Once that is done you can run the test. 

To run against BrowserStack Local use the command: npm run test:remote_from_windows
To run against your local machine use the command: npm run test:local
