const path = require('path')

module.exports = () => ({
  resolve: {
    // alias, для задания импортов типа import Utility from '$Utilities/utility'
    alias: {
      $components: path.resolve(__dirname, '../../../src/components'),
      $utils: path.resolve(__dirname, '../../../src/utils')
    },
    // чтобы не указывать импорт с расширеням
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  }
})
