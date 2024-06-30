/**
 * @name:
 * @description:异步获取数据列表
 * 月账单和年账单统计，两个功能模块，都需要用到账单列表数据请求，将其单独封装成一个hook
 * 调用useList()方法，返回值是：账单列表billList
 *
 * */
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBillList} from "../store/modules/billStore";

const useList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBillList());
	}, [dispatch]);
	const {billList} = useSelector(state => state.bill);
	return billList;
}
export default useList;