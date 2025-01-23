import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Item from './Item';
import {fetchList} from '../store/modules/channelStore';

export default function ChannelList() {
	// console.log(fetchList());
	// 使用useEffect充当生命周期钩子的作用
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchList());
	}, [dispatch]);
	// console.log(useSelector(state => state.channels));
	const {list} = useSelector(state => state.channels);
	console.log(list);
	return (<div>
		<ul>
			{list.map(item => <Item key={item.id} name={item.name}></Item>)}
		</ul>
	</div>)
}