const {
  override,
  fixBabelImports,
  addWebpackResolve,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
const path =require('path')  

module.exports = override(
    //按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackResolve({
        extensions: [".js", ".json", ".jsx" ]
    }),
//文件夹起别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src/'),
        '@a': path.resolve(__dirname, 'src/assets/'),
        '@c': path.resolve(__dirname, 'src/components'),
        '@u': path.resolve(__dirname, 'src/utils'),
    }),
    addDecoratorsLegacy()
);