import "./index.scss";

/**
 *
 * @name:UsingPropsType
 * @description:子组件props使用类型注解
 *
 * 拓展：type和interface的优缺点
 * 参考文档：
 * https://blog.csdn.net/xia_tian666/article/details/132619074
 * 官方推荐使用interface，interface不能满足需求时，才使用type关键字声明 类型别名
 *
 *
 * */

type Props = {
    className: string;
    title?: string;
}
// 子组件Button
const Button = (props: Props) => {
    const {className, title} = props;
    return (<div>
        <button className={className}>点击了{title}</button>
    </div>)
}
// 父组件UsingPropsType
const UsingPropsType = () => {
    return (<div className="props-container">
        <h2>三、传入子组件的props类型注解</h2>
        <Button className="test" title="what are you doing?"></Button>
    </div>);
}
export default UsingPropsType;
