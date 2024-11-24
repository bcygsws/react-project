import {useState} from "react";

/**
 * @desc:useState的状态不可变
 * 原理：
 * useState的状态不可变
 * 我们通常替换他，而不是修改它，这就是状态不可变
 * 1.对于基本类型，number boolean string,直接在useState解构出来的setXXX函数中传入新值即可
 * 2.对于引用类型，比如对象，数组，我们通常使用替换的方式
 * const [obj,setObj]=useState({name:'李红'});
 * setObj({...obj,{name:'张四'}})
 *
 *
 * */
const UsingState = () => {
    // 基本类型变量count
    const [count, setCount] = useState(0);
    // 引用类型变量obj
    const [obj, setObj] = useState({name: '李红'});
    return (
        <div className="use-state">
            <h6>三、useState的状态不可变</h6>
            {/*点击按钮，更新基本类型变量，number类型*/}
            <button onClick={() => setCount(count + 1)}>count:{count}</button>
            {/*点击按钮，更改引用类型变量*/}
            <button onClick={() => setObj({...obj, name: '张嫣'})}>{obj.name}</button>
        </div>
    )
}
export default UsingState;