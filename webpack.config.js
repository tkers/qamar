"use strict";

module.exports = {
    entry: ["./browser.js"],
    output: {
        path: __dirname + "/dist",
        filename: "qamar.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-2"]
                }
            }
        ]
    }
};
