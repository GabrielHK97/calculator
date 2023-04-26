const path = require('path');

module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.ts$/, use: "ts-loader"}
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};