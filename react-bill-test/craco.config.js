/**
 * @cra创建的react项目，webpack构建，但配置文件在黑盒中，使用
 * @craco/craco插件，来接管这个配置
 * 1.比如craco配置了webpack中路径别名
 * 2.同时，package.json文件，将scripts中命令：
 *  "start": "react-scripts start" 更改为 "start":"craco start"
 *
 * */
const path = require('path');
module.exports = {
	// webpack配置
	webpack: {
		// 配置别名
		alias: {
			// 约定用@代替项目的src路径
			"@": path.resolve(__dirname, "src")
		}
	}
}