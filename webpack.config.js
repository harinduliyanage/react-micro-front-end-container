
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })

    ]
}
