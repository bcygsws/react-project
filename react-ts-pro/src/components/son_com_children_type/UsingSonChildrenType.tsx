import "./index.scss";
import React from "react";

/**
 *
 * @name:UsingSonChildrenType
 * @description:为子组件props中children属性使用内置类型注解
 *
 * 1.children属性可能是多种类型(8种)数据，但我们使用内置的注解
 * React.ReactNode,来统一约束传入的各类型的数据
 *
 * 2.8种类型：
 * string、number、boolean、undefined、null
 * React.ReactElement、React.ReactFragment、React.ReactPortal
 *
 *
 * */

type Props = {
    className: string;
    // 约束为统一的类型注解React.ReactNode
    children?: React.ReactNode;
}
// 子组件Button
const Button = (props: Props) => {
    const {className, children} = props;
    console.log(children);
    // 打印解构出来的children是一个文本： 你好呀~
    // 打印解构出来的children是一个标签对象： <span>留取丹心照汗青</span>
    return (<div>
        <button className={className}>{children}</button>
    </div>)
}
// 父组件UsingPropsType
const UsingSonChildrenType = () => {
    return (<div className="children-container">
        <h2>四、为props属性中的children内置了类型注解</h2>
        {/*子组件中props属性的children来自于，在子组件一对标签之间，添加的内容 */}
        <Button className="test">你好呀~</Button>
        <Button className="test"><span>留取丹心照汗青</span></Button>
    </div>);
}
export default UsingSonChildrenType;
