const CracoLessPlugin = require("craco-less");
// const {loaderByName} = require("@craco/craco");
const CracoCssModules = require("craco-css-modules");
module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {"@primary-color": "#ee2323"},   //这个可以改变antd组件的默认颜色
						javascriptEnabled: true,
						module: true
					}
				}
			},
			// modifyLessRule(lessRule, context) {
			// 	lessRule.exclude = /\.module\.less$/;
			// 	return lessRule;
			// },
			// modifyLessModuleRule(lessModuleRule, context) {
			// 	lessModuleRule.test = /\.module\.less$/;
			// 	const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
			// 	cssLoader.options.modules = {
			// 		localIdentName: '[local]_[hash:base64:5]'
			// 	};
			// 	return lessModuleRule;
			// }
		},
		{
			plugin: CracoCssModules
		}
	],
}