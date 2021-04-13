// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) =>  {
    
    const config = {
        mode: 'development',
        entry: {
            main: ['./src/index.tsx']
        },
        output: {
            path: path.resolve(__dirname, './server/public'),
        },
        target: ['web', 'es3'],
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),

            // Add your plugins here
            // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use : {
                        loader: 'babel-loader',
                        options: {
                            configFile: './src/.babelrc',
                        }
                    },
                    exclude: ['/node_modules/', '/server/'],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader','css-loader'],
                    exclude: ['/server/'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: ['/server/'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                    type: 'asset',
                    exclude: ['/server/'],
                },

                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
        // 경로가 다음 중 하나와 일치하느느 모듈을 가져올 때,
        // 해당 전역 변수가 있다고 가정하고 사용합니다
        // 브라우저가 빌드간에 라이브러리를 캐시할 수 있도록
        // 모든 의존성을 묶지 않아도 되기 때문에 중요합니다
        // 컴파일 시간이 증가하고 브라우저가 라이브러리를 변경하지 않으면
        // 일반적으로 라이브러리를 캐시 할 수 있기 떄문에 모든 React를 동일한 파일로 묶지 않는 것이 중요합니다
        // 이상적으로 브라우저 내에서 React 모듈을 가져오지만, 대부분의 브라우저는 아직 모듈을 지원하지 않습니다
        // 대신 라이브러리는 전통적으로 jQuery 나 _와같은 단일 전역변수를 사용할 수 있습니다
        // 이런 방식을 "namespace pattern"이라고 하며, Webpack을 사용하면 이 방식으로 작성된 라이브러리를 계속 
        //externals:{
        //    "react": "React",
        //    "react-dom": "ReactDOM"
        //},
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Apple',
                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                },
                template: './index.html'
            }),
            new miniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].[id].css'
            })
        ],
    }

    if(options.mode === "production") {
        config.mode = 'production';
        config.plugins = [
            ...config.plugins,
            ...[
                new uglifyjsWebpackPlugin({
                    cach:true,
                    parallel: true,
                    sourceMap: true
                })
            ]
        ]
    } else {
        config.mode = 'development';
    }

    return config;
}
