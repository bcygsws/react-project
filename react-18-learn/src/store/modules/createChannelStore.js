const createChannelStore = (set) => {
	const URL = "http://geek.itheima.net/v1_0/channels";
	return {
		channelList: [],
		// 异步获取频道列表
		fetchChannelList: async () => {
			const resJson = await fetch(URL);
			const res = await resJson.json();
			set({
				channelList: res.data.channels
			})
		}

	}
}
export default createChannelStore;