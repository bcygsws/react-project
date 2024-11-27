/**
 * @desc:七、兄弟组件之间的通信
 * 转化为一个父传子+一个子传父
 * SiblingA--->兄弟组件SiblingB
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