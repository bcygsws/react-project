/**
 * @desc:二十一、类组件通信
 *
 * */
import Parent from "@/components/class_com_commu/Parent.tsx";
import {useState} from "react";

// 演示：类组件中，兄弟组件通信
/**
 * @desc:类组件通信
 * 1.孙子组件向祖父组件传递数据
 * 孙子组件传递一个方法
 *
 * 2.两个孙子组件间通信，兄弟通信
 * 思路：Son---先传给Parent---再传给Son
 *
 * */
function Grand() {
    const [son, setSon] = useState('');
    const funToSon = (val: any) => {
        console.log("val====", val);
        // 孙子组件的数据，存储给son
        setSon(val);
    }
    return (<div>
        <h2>二十一、这是祖父组件向孙子组件传值</h2>
        <p>孙子组件传值：{son}</p>
        <Parent fun={funToSon}/>
    </div>)

}

export default Grand;