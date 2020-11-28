
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                kassandra: 'kassandra@http://localhost:3001/remoteEntry.js'
            }
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })

    ]
}
