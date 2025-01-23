import Son from "@/components/son_to_fat/Son";
import {useState} from "react";

function Fat() {
    // 变量接受子组件的值
    const [fat, setFat] = useState(0);
    // 定义一个方法接收子组件传递过来的值
    const getValue = (value: number) => {
        console.log(value);
        setFat(value);
    }

    return <div>
        <h3>六、子组件向父组件传值</h3>
        <p>子组件传递的值为：{fat}</p>
        <Son getValue={getValue}/>
    </div>
}

export default Fat;