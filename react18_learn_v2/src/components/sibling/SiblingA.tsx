import {useEffect, useState} from "react";

const SiblingA = ({getSiblingA}: { getSiblingA: (value: number) => void }) => {
    const [value, setValue] = useState(0);
    const sendVal = () => {// 点击按钮，SiblingA开始向SiblingB发送数据
        getSiblingA(value);
    }
    // SiblingA当前value改变，让这种改变，同步到其父组件MyFat
    // MyFat--->SiblingB,是父传子，单向数据流的正常流向；MyFat改变，SiblingB的值会主动跟随这种变化

    useEffect(() => {
        getSiblingA(value);
    }, [value])

    return (
        <div>
            <h6>SiblingA子组件</h6>
            <div>SiblingA</div>
            <button onClick={sendVal}>当前值：{value} ,SiblingA向SiblingB发送数据</button>
            <button onClick={() => setValue(value + 1)}>改变SiblingA中要传递的值，观看SiblingA和SiblingB的更新</button>
        </div>
    )
}
export default SiblingA;