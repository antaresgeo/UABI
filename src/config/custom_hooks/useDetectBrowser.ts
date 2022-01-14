const useDetectBrowser = (
    minBrowserVersions: any = {
        chrome: '60',
        firefox: '55',
        edge: '15',
    }
): [any, boolean] => {
    const { detect } = require('detect-browser');
    const cmp = require('semver-compare');
    const browser = detect();
    let supported: boolean = false;
    if (browser) {
        if (minBrowserVersions[browser.name] !== null) {
            const version: string = minBrowserVersions[browser.name];
            const diff: number = cmp(browser.version, version);
            if (diff >= 0) {
                supported = true;
            }
        }
    }
    return [browser, supported];
};

export default useDetectBrowser;
