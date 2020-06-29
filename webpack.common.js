const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    main: "./src/js/main.js",
    index: "./src/js/index.js",
    my_index: "./src/js/scripts.js",
    links: "./src/js/scripts_links.js",
    // another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */

    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["my_index", "index", "main"],
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/links.html",
      inject: true,
      chunks: ["my_index", "index", "links"],
      filename: "links.html",
    }),

    // new HtmlWebpackPlugin({
    //   template: "./src/pages/index_old.html",
    //   inject: true,
    //   chunks: ["index"],
    //   filename: "index_old.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/pages/another.html",
    //   inject: true,
    //   chunks: ["index", "another"],
    //   filename: "another.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/pages/andrzej.html",
    //   inject: true,
    //   chunks: ["index"],
    //   filename: "andrzej.html",
    // }),
  ],
};
