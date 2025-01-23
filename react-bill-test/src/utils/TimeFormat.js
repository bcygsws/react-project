import dayjs from "dayjs";

const TimeFormat = (val) => {
	return dayjs(val).format("YYYY-MM");
}
// 拼接某个格式的时间，比如 2024-10-12
const WholeTimeFormat = (val) => {
	return dayjs(val).format("YYYY-MM-DD");
}
export {TimeFormat, WholeTimeFormat};