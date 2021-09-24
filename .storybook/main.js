module.exports = {
    stories: [`${process.cwd()}/__stories__/**/*.stories.tsx`],
    "addons": [
        "@storybook/addon-essentials",
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.tsx?$/],
                    include: [`${process.cwd()}/__stories__`],
                },
                loaderOptions: {
                    parser: 'typescript',
                },
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules = config.module.rules.map(rule => {
            if (
                String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
            ) {
                return {
                    ...rule,
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
                }
            }

            return rule
        })
        config.resolve.alias = {
            ...config.resolve.alias,
            'fs': require('path').resolve(__dirname, 'fsMock.js'),
        };
        config.node = config.node || {};
        config.node.__dirname = true;
        config.node.__filename = true;
        return config;
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
};