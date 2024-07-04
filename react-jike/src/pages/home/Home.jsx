import Charts from "../../components/Charts";

const Home = () => {
	const options = {
		title: {
			text: "前端框架市场份额"
		},
		tooltip: {},
		legend: {// 柱状图上的注释
			data: ["市场占比"]
		},
		xAxis: {
			type: "category",
			data: ["Vue", "React", "Angular", "JQuery"]
		},
		yAxis: {
			type: "value"
		},
		series: [// 例如：当鼠标置于柱状图时，会提示 市场占比40
			{
				name: "市场占比",
				type: "bar",
				data: [55, 35, 7, 3]
			},
		],
	};
	const options1 = {
		title: {
			text: "前端框架使用满意度"
		},
		tooltip: {},
		legend: {// 柱状图上的注释
			data: ["满意程度"]
		},
		xAxis: {
			type: "category",
			data: ["Vue", "React", "Angular", "JQuery"]
		},
		yAxis: {
			type: "value"
		},
		series: [// 例如：当鼠标置于柱状图时，会提示 市场占比40
			{
				name: "满意程度",
				type: "bar",
				data: [44, 45, 9, 2]
			},
		],
	};
	return (<div className="home-container">
		{/* 注：legend.data中的值和series.name中的值完全相等时，柱状图上方，市场占比和满意程度注释
		才会显示*/}
		<Charts options={options}></Charts>
		<Charts options={options1}></Charts>

	</div>);
}
export default Home;