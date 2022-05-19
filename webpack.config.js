// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin') //node_modules에서 html-webpack-plugin 을 가져와서 할당함
const CopyPlugin = require ('copy-webpack-plugin')

// export 
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), 
    // filename: 'main.js',
    clean: true 
  },

  module:{
    rules: [
      {
        test: /\.s?css$/, //.scss와 css 확장자로 끝나는 것을 찾는 정규식. s는 있을수도 있고 없을수도 있음
        use: [
          'style-loader', // 순서를 style-loader부터 작성해야한다.
          'css-loader',
          'postcss-loader',
          'sass-loader' // sass-loader가 가장먼저 동작함
        ]
      },
      {
        test:/\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'} // 만들어 놓은 static 폴더를 지칭
      ]
    })
  ],

  devServer:{
    host: 'localhost' //개발서버 오픈하고 로컬호스트 주소가 정확하게 안나올때를 위한 코드
  }
}