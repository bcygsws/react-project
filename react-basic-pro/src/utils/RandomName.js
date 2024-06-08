/**
 * @name:RandomName
 * @description:传入一个前缀prefix,和随机名长度randomLength,获得随机名字
 * 另：当前项目中安装了uuid,也可以引进它，进一步增加随机名的复杂度
 *
 * */
export default function RandomName(prefix = "", randomLength = 6) {
	// 声明返回的名字变量name
	let name = "";
// 由字母和数字组成的源数组
	let baseStr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']];
	for (let i = 0; i < randomLength; i++) {
		// 	baseStr数组由两个元素组成，使用随机数产生索引index是：0或者1
		let index = Math.floor(Math.random() * 2);
		let curStr = baseStr[index][Math.floor(Math.random() * baseStr[index].length)];
		// 增加复杂度，如果index=1，表示从字母中选取，字母都有大小写
		if (index === 1) {
			// 有50%的概率，使得curStr变成大写
			if (Math.floor(Math.random() * 2) === 1) {
				curStr = curStr.toUpperCase();
			}
		}
		// console.log(curStr);
		name += curStr;
	}
	name = prefix + name;
	return name;

}