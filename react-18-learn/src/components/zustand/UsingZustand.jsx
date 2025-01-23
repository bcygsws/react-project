import useStore from "../../store/index";
import {useEffect} from "react";
import './index.less';

const UsingZustand = () => {
	// 调useCountStore钩子，解构出count数据和修改方法increment
	const {count, increment, channelList, fetchChannelList} = useStore();
	// 组件渲染时，调用fetchChannelList，获取列表
	useEffect(() => {
		fetchChannelList();// 浏览器控制台，验证请求成功了{data:{channels:[]},message:'OK'}
	}, [fetchChannelList]);
	return (<div>
		<h2>二十一、比redux简明的状态管理工具zustand</h2>
		<p>count值：{count}</p>
		<button onClick={increment}>+1</button>
		{/*	分割线*/}
		<hr/>
		<h4>zustand对异步的支持</h4>
		<ul className="channel-list">
			{channelList.map(function (channel) {
				return (<li key={channel.id}>{channel.name}</li>)
			})}
		</ul>
	</div>)

}
export default UsingZustand;