import TimeFormat from "./TimeFormat";

/**
 * @name:ArrayConverting
 * @description：标准化时间
 * 1.给出的defaultList中ctime是字符'2011-10-18 09:00'
 * 2.添加后的数据是时间戳---number类型
 * 3.都统一成时间戳的形式
 *
 * 参数：item,对象类型
 *
 *
 *
 *
 * */
export default function  ArrayConverting(item){
	return {
		rpid: item.rpid,
		user: {
			uid: item.user.uid,
			avatar: item.user.avatar,
			uname: item.user.uname
		},
		content: item.content,
		ctime: (new Date(TimeFormat(item.ctime))).getTime(),// new Date("2012-12-12 10:11").getTime()可以转化为数字
		like: item.like
	}

}