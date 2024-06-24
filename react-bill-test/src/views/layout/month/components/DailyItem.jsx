import billTypeToName from "../../../../constant";
import classNames from "classnames";

const DailyItem = ({useFor, money}) => {
	return (<ul className="daily-item">
		{/*<li>{useFor}</li>*/}
		{/*适配中文显示后*/}
		<li>{billTypeToName[useFor]}</li>
		<li className={classNames(money > 0 ? "color-green" : "color-orange")}>{money.toFixed(2)}</li>
	</ul>);
}
export default DailyItem;