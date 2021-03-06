const { runLoaders } = require('loader-runner');
const path = require('path');
const fs = require('fs');

runLoaders({
    resource: path.join(__dirname, './src/dome.txt'),
    loaders: [
        {
            loader: path.join(__dirname, './src/raw-loader.js'),
            options: {
                name: 'jinze'
            }
        }
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    err ? console.log(err) : console.log(result);
})