/**
 * 配置路由映射
 * 非 next.js 默认路由映射
 */
module.exports = function (app, renderPage, env) {
  const customRoutesConfigs = [require("./test")];

  customRoutesConfigs.forEach((config) => {
    config(app, renderPage, env);
  });
};
