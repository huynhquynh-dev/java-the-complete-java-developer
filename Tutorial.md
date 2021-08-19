# Install Eslint

```
npm install --save-dev eslint
```

# Install Webpack v4

```
npm install --save-dev webpack@4 --save-exact
npm install --save-dev webpack-cli
```

Sau đó vào tệp package.json nhập:
```
"scripts": {
    "build": "webpack"
}
```

Tạo tệp webpack.config.js vào cấu hình.

# Install webpack-dev-server
```
npm install --save-dev webpack-dev-server
```

Sau đó vào tệp package.json nhập:
```
"scripts": {
    "build:dev": "webpack-dev-server"
}
```

Run webpack-dev-server
```
npm run build:dev
```

# Install auto build server
```
npm install serve
```

# Debug with webpack

Thêm vào tệp webpack.config.js

```
devtool: 'cheap-module-eval-source-map'
```

# Debug and Deploy project with webpack

Tạo tệp webpack.config.prod.js

Copy nguyên mẫu từ tệp webpack.config.js và chỉnh sửa:
```
mode: 'production'
devtool: 'cheap-source-map'
```

Sau đó vào tệp package.json nhập:
```
"scripts": {
    "build:prod": "webpack --config webpack.config.prod.js"
}
```

Run build webpack prod
```
npm run build:prod
```

# Install webpack clean

Dọn dẹp các file build dư thừa
```
npm install --save-dev clean-webpack-plugin
```

Thêm vào tệp cấu hình Webpack
```
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}
```