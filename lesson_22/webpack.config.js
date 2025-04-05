const path = require('path');

module.exports = {
  entry: './src/main.js', // Вхідний файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Куди зберігати
    filename: 'bundle.js', // Ім'я зібраного файлу
  },
  mode: 'development', // Або "production"
  module: {
    rules: [
      {
        test: /\.css$/, // Підтримка CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Підтримка SCSS
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'src'), // Де шукати HTML
    port: 3000, // Порт сервера
    open: true, // Автоматично відкривати браузер
  },
};
