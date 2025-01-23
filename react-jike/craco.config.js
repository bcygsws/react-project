const path = require("path");
const {whenProd, getPlugin, pluginByName} = require("@craco/craco");
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		// 配置webpack的CDN服务
		configure: (webpackConfig) => {
			let cdn = {
				js: []
			};
			whenProd(() => {
				// key:不参与打包的包，名称由package.json中的dependencies键名决定
				// value:CDN服务中，挂载在全局使用的变量名，为了替换之前的开发环境下
				webpackConfig.externals = {
					'react': 'React',
					'react-dom': 'ReactDOM'
				};
				// 配置现成的CDN资源地址;实际开发中使用自己公司购买的CDN
				// 'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
				// 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
				cdn = {
					js: [
						'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
						'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'
					]
				}
			})
			/**
			 * @description:使用html-webpack-plugin插件，在public/index.html中注入CDN中的url
			 * 1.getPlugin()方法，获取插件；有两个参数
			 * 2.第二个参数中，根据名字寻找插件，HtmlWebpackPlugin, H首字母大写
			 * 而在public/index.html中，引入配置cdnURl时，开头的htmlWebpackPlugin,首字母小写
			 *
			 * */
			const {isFound, match} = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));
			if (isFound) {// 找到了插件
				console.log(match);
				match.options.cdn = cdn;

			}

			return webpackConfig;

		}
	}
}