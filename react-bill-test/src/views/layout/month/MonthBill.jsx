import {DatePicker, NavBar} from "antd-mobile"
import "./month.scss";
import {useEffect, useMemo, useState} from "react";
// 时间格式化工具dayjs
import TimeFormat from "../../../utils/TimeFormat";
// css类格式化工具classnames
import classNames from "classnames";
import {useSelector} from "react-redux";
// lodash工具，groupBy方法
import _ from "lodash";

export default function MonthBill() {
	const [visible, setVisible] = useState(false);
	// 时间选择器，状态变量：true，打开；false,关闭
	const [dateVisible, setDateVisible] = useState(false);
	// currentDate上默认显示的时间，总是当时的 年份-月份
	const [currentDate, setCurrentDate] = useState(TimeFormat(new Date()));
	const [currentMonthList, setCurrentMonthList] = useState([]);
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
	const {billList} = useSelector(state => state.bill);
	console.log(billList);
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
	 *
	 * */
	useEffect(()=>{
		
	},[]);



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
	</div>);

}