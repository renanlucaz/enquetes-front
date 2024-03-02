module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ],
    plugins: [
        '@babel/transform-runtime',
        [
            'babel-plugin-root-import',
            {
                paths: [
                    {
                        rootPathSuffix: './',
                        rootPathPrefix: '@/',
                    },
                    {
                        rootPathSuffix: './src/common/components',
                        rootPathPrefix: '@components',
                    },
                    {
                        rootPathSuffix: './src/app/services',
                        rootPathPrefix: '@services',
                    },
                ],
            },
        ],
    ],
};
