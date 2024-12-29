import {Component} from "react";
import context from './Context';

/**
 * @desc:context通信方式的前世今生
 * 参考文档：https://www.cnblogs.com/davina123/p/13634350.html
 * 1.context通信，最开始的方式
 * 联想记忆： childContextTypes记忆起
 * 需要安装prop-types包，react高版本已经集成这个包，无需单独安装了
 * 发送数据：
 * 1.1 静态属性声明，申明要传递的数据的类型
 * static childContextTypes={
 *     data:propTypes.string
 * }
 * 1.2 明确要发送的数据
 * getChildContext(){
 *     return {data:'你好'}
 * }
 *
 * 接收数据：
 * 1.3 静态属性声明，校验接收的类型
 * static contextTypes={
 *    data:propTypes.string
 * }
 * 1.4 组件中，this.context.data就可以拿到传递的值
 *
 * */

export class Test1 extends Component {
    // 1.静态成员contextType不用写this.context中的this;因为它是跟随类创建时候创建出来的，此时还没有this实例
    // 2.将context赋值给contextType以后，在类组件中使用this.context就可以取到传递的值了
    static contextType = context;

    render() {
        // 1.静态属性：类似Java,类名.contextType来调用
        // 2.它等价于Context.tsx中，使用createContext()创建的context对象
        console.log("contextType===", Test1.contextType);
        // 拿到了ContextCommu.tsx组件，Provider上绑定的value上下文对象，然后遍历对象，打印出键值
        console.log("this.context===", this.context);// this.context=== {theme: 'red', setTheme: ƒ}
        const value: any = this.context;
        return (
            <div>
                <h6>八、我是Test1类组件-子组件，演示static contextType拿到组件外部的context对象</h6>
                <p>this.context键值：{
                    // 拿到了ContextCommu.tsx组件，Provider上绑定的value上下文对象，然后遍历对象，打印出键值
                    Object.keys(value).map(item => <div key={item} style={{color: 'blue'}}>{item}</div>)
                }</p>
            </div>
        )
    }
}