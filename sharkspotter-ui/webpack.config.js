const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundlefile.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                use: [ 'babel-loader'],
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"],
                }
            },
            { 
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                // use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        //Allows remove/clean the build folder
        // new CleanWebpackPlugin(),
        //Allows update react components in real time
        // new HotModuleReplacementPlugin(),
        //Allows to create an index.html in our build folder
        new HtmlWebpackPlugin({
           template: './public/index.html',
           favicon: './public/favicon.ico'
        }),
        new Dotenv()
        //This get all our css and put in a unique file
        // new MiniCssExtractPlugin({
        //     filename: "styles.[contentHash].css",
        // }),
    ]
}

