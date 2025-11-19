const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@layouts': path.resolve(__dirname, 'src/layouts/'),
            '@services': path.resolve(__dirname, 'src/services/'),
            '@redux': path.resolve(__dirname, 'src/redux/'),
            '@providers': path.resolve(__dirname, 'src/providers/'),
            '@dashboard': path.resolve(__dirname, 'src/templates/dashboard/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
        },
    },
};