import dayjs from "dayjs";

const TimeFormat = (val) => {
	return dayjs(val).format("YYYY-MM");
}
// 拼接某个格式的时间，比如 2024 | 03
const genFormat = (val) => {
	const str = TimeFormat(val).split("-");
	return str[0] + " | " + str[1];
}
export {genFormat};
export default TimeFormat;