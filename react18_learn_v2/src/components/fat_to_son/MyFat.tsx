import Son from "@/components/fat_to_son/Son";
import {useState} from "react";

/**
 * @desc:五、父子组件间通信
 * 父组件向子组件传值
 *
 * */
const MyFat = () => {
    const [name, setName] = useState("who are you?");

    return (
        <div>
            <h6>五、父子组件间通信</h6>
            <button onClick={() => setName(name + '~~~')}>{name}</button>
            <Son name={name}/>
        </div>
    )
}
export default MyFat;