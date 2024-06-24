const IconItem = ({type}) => {
	return (<div className="icon-container">
		<img src={"https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/" + type + ".svg"} alt=""
		     width="50%"/>
	</div>)
}
export default IconItem;