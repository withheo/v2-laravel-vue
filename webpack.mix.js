const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

const alias = {
    '@': path.resolve(__dirname, 'resources/js'),
};


mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            '__VUE_PROD_DEVTOOLS__': false, // 디버그 도구를 비활성화하려면 false로 설정
            '__VUE_PROD_ERROR_CAPTURE__': true, // 에러 캡처를 활성화하려면 true로 설정
            // 다른 필요한 기능 플래그를 추가합니다.
        }),
    ],
});

mix
.alias(alias)
.ts('resources/js/app.ts', 'public/js')
.vue({ version: 3 })

