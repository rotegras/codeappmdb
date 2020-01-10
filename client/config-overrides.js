const rewireReactHotLoader = require('react-app-rewire-hot-loader');

// module.exports = function override(config, env) {
  // config = rewireReactHotLoader(config, env);
  // return config;
// }

const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");


module.exports = override(config, env){
  config = rewireReactHotLoader(config, env);
  return config;
};
module.exports = fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
;
// );
