/**
 * @desc:七、兄弟组件之间的通信
 * 1.兄弟组件传递数据思路：
 * 转化为一个父传子+一个子传父
 * SiblingA--->兄弟组件SiblingB
 *
 * 2.响应式：SiblingA中的value值变化，同步给SiblingB
 * 使用useEffect侦听钩子，value值一改变，就重新调用getSiblingA方法，获取最新值，并且同步给SiblingB
 *
 * */
import SiblingA from "@/components/sibling/SiblingA";
import SiblingB from "@/components/sibling/SiblingB";
import {useState} from "react";

const MyFat = () => {
    const [val, setVal] = useState(0);
    const getSiblingA = (value: number) => {
        console.log(value);
        setVal(value);
    }
    return (
        <div className="sibling">
            <h5>七、兄弟组件之间的通信</h5>
            {/*子传父*/}
            <SiblingA getSiblingA={getSiblingA}/>
            {/*父传子*/}
            <SiblingB val={val}/>
        </div>
    )
}
export default MyFat;