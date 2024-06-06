/**
 * @description:时间格式化
 *
 * */
import {format} from "date-fns";

export default function TimeFormat(val) {
	return format(val, "yyyy-MM-dd HH:mm");
}