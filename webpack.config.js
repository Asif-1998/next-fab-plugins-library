const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production', // or 'development' for development mode
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'next-fab-plugins-library',
        libraryTarget: 'umd',
        globalObject: 'this', // Added for UMD bundles
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        minimize: false, // Keep it false for Next.js projects
    },
    performance: {
        hints: false, // Disable performance hints
    },
};
