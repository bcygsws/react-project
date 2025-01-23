import React, {useState} from "react";

/**
 * @desc：二、绑定事件
 *
 * */
const BindEvent = () => {
    const [flag, setFlag] = useState(false);
    // 切换组件（代码片段）的显示或者隐藏
    const clickHandler = () => {
        setFlag(!flag);
    }

    // 注：标签button点击事件的类型注解
    type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
    const clickHandler1 = (e: ClickEvent) => {
        console.log(e);
    }

    // 在点击事件传值时，一定要写成箭头函数的形式{()=>clickHandler2}
    const clickHandler2 = (val: any) => {
        console.log(val);
    }
    const clickHandler3 = (e: ClickEvent, val: any) => {
        console.log(e);
        console.log(val);
    }
    return (<div>
        {flag && <div>加载中……</div>}
        <button onClick={clickHandler}>切换代码片段的显示状态</button>
        <hr/>
        <button onClick={clickHandler1}>点击事件，拿到参数e</button>
        <hr/>
        {/*在点击事件传参数时，一定要写成箭头函数的形式{()=>clickHandler2}*/}
        <button onClick={() => clickHandler2('JACK')}>在点击事件中，为事件处理函数传参</button>
        {/*既要传参，又要拿到参数e;箭头函数中，也传入一个形参e*/}
        <hr/>
        <button onClick={(e) => clickHandler3(e, 'JACK')}>点击事件，获取事件参数e+自己传参</button>
    </div>)
}
export default BindEvent;