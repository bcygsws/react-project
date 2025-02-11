import {DatePicker, NavBar} from "antd-mobile"
import "./month.scss";
import {useEffect, useMemo, useState} from "react";
// 时间格式化工具dayjs
import {TimeFormat} from "../../../utils/TimeFormat";
// css类格式化工具classnames
import classNames from "classnames";
// import {useSelector, useDispatch} from "react-redux";
// lodash工具，groupBy方法
import _ from "lodash";
import DailyBill from "./components/DailyBill";
import dayjs from "dayjs";
// import {getBillList} from "../../../store/modules/billStore";
// 获取数据列表，billList；单独封装成了钩子useList
import useList from "../../../hooks/useList";

export default function MonthBill() {
	// 时间选择器，状态变量：true，打开；false,关闭
	const [dateVisible, setDateVisible] = useState(false);
	// currentDate上默认显示的时间，总是当时的 年份-月份
	const [currentDate, setCurrentDate] = useState(TimeFormat(new Date()));
	const [currentMonthList, setCurrentMonthList] = useState([]);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getBillList());
	// }, [dispatch])
	// 时间选择器切换时间
	const confirmHandler = (val) => {
		// Toast.show(val.toDateString());
		// 存储当前选择的时间数组
		setCurrentDate(TimeFormat(val));
		// 每次切换时，拿到当前 年份-月份 值
		console.log(TimeFormat(val));
		setCurrentMonthList(MonthGroup[TimeFormat(val)] ? MonthGroup[TimeFormat(val)] : []);
	}
	// 变量now,获取当前时间
	const now = new Date();
	/**
	 * @使用useMemo钩子，类似vue中的计算属性
	 *
	 *
	 * */
	// const {billList} = useSelector(state => state.bill);
	const billList = useList();
	console.log("test", billList);
	const MonthGroup = useMemo(() => {
		return _.groupBy(billList, (item) => TimeFormat(item.date));
	}, [billList]);
	// MonthGroup是一个以时间为key的对象，例如：key值为 2022-10
	console.log(MonthGroup);
	/**
	 *
	 * @收入、支出和结余的计算
	 * useMemo
	 * 依赖是同一个月的数据汇总的数组，即[currentMonthList]
	 *
	 * */
	const monthResult = useMemo(() => {
		// 支出
		const pay = currentMonthList.filter((item) => item.type === 'pay').reduce((a, c) => a + c['money'], 0);
		// 收入
		const income = currentMonthList.filter((item) => item.type === 'income').reduce((a, c) => a + c['money'], 0);
		return {
			pay,
			income,
			total: income + pay
		}
	}, [currentMonthList]);
	/**
	 * @默认月账单，打开显示当前月份的支出、收入和结余
	 * currentMonthList数组修改了，useMemo计算而得到的monthResult也就会重新计算了
	 *
	 * */
	useEffect(() => {
		// currentMonthList数组修改了，useMemo计算而得到的monthResult也就会重新计算了
		setCurrentMonthList(MonthGroup[TimeFormat(now)] ? MonthGroup[TimeFormat(now)] : []);
	}, [MonthGroup]);
	/**
	 * @当前月的数据currentMonthList，按照日期分组，拿到日期数组和每日的收入、支出信息数组
	 *
	 * */
	const DailyGroup = useMemo(() => {
		const dailyList = _.groupBy(currentMonthList, (item) => dayjs(item.date).format("YYYY-MM-DD"));
		const keys = Object.keys(dailyList);
		// keys时间数组，元素实例：2024-06-23；数组中元素按照 日期降序排列，组成一个新的数据
		// sort方法，会改变原数组；所以，不用再次赋值
		keys.sort((a, b) => b.localeCompare(a));

		// let key1 = Object.keys(dailyList).map(item => Number(new Date(item)));
		// // key1数组中元素（时间戳）按倒序排列
		// key1.sort((a, b) => b - a);// 排序sort方法返回原始数组的引用，因此改变原数组
		// key1 = key1.map(item => dayjs(item).format("YYYY-MM-DD"));
		// // console.log(key1);
		return {
			dailyList,
			keys
		}
	}, [currentMonthList]);


	return (<div className="monthly-bill">
		<div className="header">
			<NavBar backArrow={false}>月度账单</NavBar>
		</div>
		<div className="content">
			{/*时间切换区域*/}
			<div className="time" onClick={() => {
				setDateVisible(true)
			}}>
				{/*注意："" 拼接成字符串的目的是，react的规则，对象不能直接渲染*/}
				<span>{currentDate + ''}月账单</span>
				<span className={classNames("arrow", dateVisible && "expand")}></span>
			</div>
			<div className="data">
				<div className="item">
					<span>{monthResult.pay.toFixed(2)}</span>
					<span>支出</span>
				</div>
				<div className="item">
					<span>{monthResult.income.toFixed(2)}</span>
					<span>收入</span>
				</div>
				<div className="item">
					<span>{monthResult.total.toFixed(2)}</span>
					<span>结余</span>
				</div>
			</div>
		</div>
		{/*时间选择器，使用dateVisible控制打开和关闭状态*/}
		<DatePicker
			title='时间选择'
			visible={dateVisible}
			onClose={() => {
				setDateVisible(false)
			}}
			max={now}
			onConfirm={val => confirmHandler(val)}
		/>
		<div className="day-container">
			<div className="day-list">
				{
					DailyGroup.keys.map((key) => <DailyBill
						key={key}
						date={key}
						dailyList={DailyGroup.dailyList[key]}/>)
				}
			</div>
		</div>

	</div>);

}