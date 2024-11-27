import {Component} from "react";
// 在类组件中使用this.context就可以拿到当前消费的上下文了
import context from './Context';

export class Test1 extends Component {
    // 静态成员contextType不用写this.context中的this;因为它是跟随类创建时候创建出来的，此时还没有this实例
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