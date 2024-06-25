/**
 * bug:解决在父组件NewAdd点击事件，不生效的问题
 * onClick没有传值时，是一个函数体为空的函数，()=>{}
 * 父组件传值时，就接收父组件的传值
 *
 * */
const IconItem = ({
	                  type, onClick = () => {
	}
                  }) => {
	return (
		<img src={"https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/" + type + ".svg"}
		     style={{width: "20px", height: "20px"}} alt="" onClick={onClick}/>
	)
}
export default IconItem;