import {useEffect, useState} from "react";
import EmptyDependency from "@/components/use_effect/EmptyDependency";
import NoDependency from "@/components/use_effect/NoDependency";
import HavingDependency from "@/components/use_effect/HavingDependency";
import ClearEffect from "@/components/use_effect/ClearEffect";

/**
 * @desc: 十、useEffect的用法
 *
 * */
const URL = "http://geek.itheima.net/v1_0/channels";

export interface Item {
    id: number;
    name: string;
}

const UsingEffect = () => {
    const [channels, setChannels] = useState<Array<Item>>([]);
    // 请求后端数据
    useEffect(() => {
        // 1.异步请求后端数据：尝尝在useEffect中书写；在useEffect中定义请求逻辑方法，然后再调用它
        // 2.一般使用空依赖，即：useEffect(()=>{},[]),让它在组件渲染时，执行一次，避免重复请求，影响性能
        async function getList() {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);
            if (data.message === 'OK') {
                setChannels(data.data.channels);
            }

        }

        getList();
    }, []);// 空依赖，初始渲染时执行一次
    return (
        <div>
            <h4>十、useEffect的用法</h4>
            {/*没有依赖，初始渲染或者组件更新时渲染*/}
            <NoDependency/>
            {/*useEffect空依赖*/}
            <EmptyDependency/>
            {/*有依赖时，初始渲染或者依赖更新时渲染*/}
            <HavingDependency/>
            {/*清除副作用*/}
            <ClearEffect/>
            <ul>
                {
                    channels.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>

        </div>
    )
}
export default UsingEffect;