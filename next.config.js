const path = require('path');
module.exports = (phase)=> {
    return {
        generateEtags: false,
        reactStrictMode: phase === 'phase-development-server',
        productionBrowserSourceMaps: true,
        poweredByHeader: false,
        sassOptions : {
            includePaths: [path.join(__dirname, 'styles')]
        }
    }
}