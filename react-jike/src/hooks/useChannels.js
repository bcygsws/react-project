import {useEffect, useState} from "react";
import {getChannelAPI} from "../apis/article";

/**
 * @name:useChannels.js
 * @description:将下拉框获取频道的代码封装起来，以方便复用
 *
 * */
const useChannels = () => {
	const [channelList, setChannelList] = useState([]);
	useEffect(() => {
		async function getChannelList() {
			const result = await getChannelAPI();
			// console.log(result.data);
			setChannelList(result.data.channels);
		}

		getChannelList();

	}, []);
	return channelList;
}
export default useChannels;