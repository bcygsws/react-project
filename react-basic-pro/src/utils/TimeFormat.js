/**
 * @description:时间格式化
 * 包date-fns,也可以使用轻量的包day.js
 *
 *
 * */
import {format} from "date-fns";

export default function TimeFormat(val) {
	return format(val, "yyyy-MM-dd HH:mm");
}