import "./index.scss";
import IconItem from "../../layout/month/components/IconItem";

const Category = ({name, list, handlerSonClick}) => {
	return (<div className="cat-container">
		<div className="title">{name}</div>
		<div className="cat-fat">
			{
				list.map((item) => {
					return <div className="list" key={item.type} onClick={() => handlerSonClick(item.type)}>
						<IconItem type={item.type}/>
						<div className="cat-footer">{item.name}</div>
					</div>

				})
			}
		</div>

	</div>)
}
export default Category;