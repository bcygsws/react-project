/**
 * @desc:二十一、类组件通信
 *
 * */
import Parent from "@/components/class_com_commu/Parent.tsx";

// 演示：类组件中，兄弟组件通信
// 思路：Son---先传给Parent---再传给Son
function Grand() {
    const funToSon = (val: any) => {
        console.log("val====", val);
    }
    return (<div>
        <h2>二十一、这是祖父组件向孙子组件传值</h2>
        <Parent fun={funToSon}/>
    </div>)

}

export default Grand;