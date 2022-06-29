const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const partytown = require('@builder.io/partytown/utils')

module.exports = ({ isDev, isBundleAnalyzer }) => {
  const plugins = []

  const sharedPlugins = [
    // создаст основной html и свяжет билд JS
    new HtmlWebPackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
      title: 'no CRA'
    }),

    // копируем файлы в сборку
    new CopyPlugin({
      patterns: [
        {
          from: 'src/scripts',
          to: path.join('./', 'scripts')
        },
        {
          from: partytown.libDirPath(),
          to: path.join('./', '~partytown')
        }
      ]
    })
  ]

  const devPlugins = [
    // горячая перезагрузка
    new ReactRefreshWebpackPlugin()
  ]

  const prodPlugins = [
    // извлекает css в отдельные файлы и добавляет ссылки на эти файлы в HTML документ
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]

  if (isDev) {
    plugins.push(...devPlugins)
  } else {
    plugins.push(...prodPlugins)
    if (isBundleAnalyzer) plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    plugins: [...plugins, ...sharedPlugins].filter(Boolean)
  }
}
