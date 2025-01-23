/**
 * @最新、最热，都要求数值大的优先渲染，是一个倒序DESC
 *
 * */
export default function comFn(property) {
	return function (a, b) {
		let value1 = a[property];
		let value2 = b[property];
		return value2 - value1;

	}
}