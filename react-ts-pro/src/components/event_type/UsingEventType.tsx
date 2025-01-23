import {useState} from "react";

type Props = {
    onGetMsg?: (msg: string) => void

}
const Son = (props: Props) => {
    const {onGetMsg} = props;
    const sonData = "传给父组件的数据";
    return (<div>
        <h4>我是son子组件</h4>
        {/*点击按钮，传值给父组件*/}
        {/* onMsg是可选属性后，调用方法时，写成一个可选链的形式，onMsg?.*/}
        <button onClick={() => onGetMsg?.(sonData)}>传值给父组件</button>
    </div>)
}

const UsingEventType = () => {
    const [str, setStr] = useState("");
    const msgHandler = (val: string) => {
        console.log(val);
        setStr(val);

    }
    return (<div>
        <h2>五、props传入事件时的类型注解</h2>
        {/*渲染子组件son传递过来的值*/}
        <p>子组件Son的传值：{str}</p>
        <Son onGetMsg={msgHandler}></Son>
    </div>)
}
export default UsingEventType;