const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  console.log("mode: ", env.mode);

  const devMode = env.mode !== "production";
  console.log(devMode);

  return {
    mode: env.mode ?? "development",
    entry: {
      bundle: path.resolve(__dirname, "./src/index.js"),
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name][contenthash].js",
      clean: true,
      assetModuleFilename: "assets/[name][ext]",
    },
    devtool: "source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      compress: true,
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  { runtime: devMode ? "automatic" : "classic" },
                ],
              ],
            },
          },
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack project template",
        template: "src/template.html",
        filename: "index.html",
        inject: true,
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/sitemap.xml", to: "sitemap.xml" },
          { from: "./src/robots.txt", to: "robots.txt" },
        ],
      }),
    ],
  };
};






