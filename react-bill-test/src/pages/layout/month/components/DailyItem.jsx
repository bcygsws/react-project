import billTypeToName from "../../../../constant";
import classNames from "classnames";
import IconItem from "./IconItem";

const DailyItem = ({useFor, money}) => {
	return (<ul className="daily-item">
		{/*<li>{useFor}</li>*/}
		{/*适配中文显示后*/}
		<li><IconItem type={useFor}></IconItem><span>{billTypeToName[useFor]}</span></li>
		<li className={classNames(money > 0 ? "color-green" : "color-orange")}>{money.toFixed(2)}</li>
	</ul>);
}
export default DailyItem;