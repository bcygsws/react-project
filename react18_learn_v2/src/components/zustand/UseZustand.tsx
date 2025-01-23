import useStore from "@/components/zustand/store";
import {useEffect} from "react";
import {IChannel} from "@/components/zustand/store/modules/useChannelStore";

/**
 * @desc:zustand使用场景
 * 参考文档：https://blog.csdn.net/Pandora_417/article/details/144206138
 * 官网：https://github.com/pmndrs/zustand
 * 中文翻译：https://juejin.cn/post/7273126566460719165
 *
 * 和redux的比较
 *                zustand                    redux
 * 学习曲线        低                需要理解reducer和action
 * 模版代码       极少               较多
 * 性能优化       内置浅比较         需手动配置（useMemo、memo等）
 * 中间件生态     较少（但简单够用） 丰富
 * 使用场景       小到中型项目       中到大型项目
 *
 * zustand使用
 * 1.创建钩子，useXXXStore，钩子内部切面的方式，包含数据和操作数据的方法；改变数据必须以不可变的
 * 方式进行，这和原生redux的要求一样；然而react-redux+@reduxjs/toolkit，则由于RTK包，包含immer,可以直接对
 * 数据源进行修改；
 * 示例：
 * const useCounterStore=(set:any)=>{
 *     return {
 *         count:0,
 *         increment:()=>set((state:{count:number})=>({count:state.count+1}))
 *     }
 * }
 *
 *
 *
 * 2.创建index.tsx；将所有的钩子，组合成一个useStore，并暴露出去
 * const useStore=create(
 *   (...a)=>{
 *     return {
 *         ...useCounterStore(...a),
 *         ...useChannelStore(...a)
 *     }
 * }
 * )
 *
 * 3.在需要使用的组件中，解构useStore，即可获取到所有状态和方法
 * 示例：
 * const {count,increment,modify,channelList,getChannelList}=useStore();
 * 注：如果只需要渲染count值，这种局部订阅，也可以给useStore传参
 * const count=useStore((state)=>state.count);
 *
 *
 * */

const UseZustand = () => {
    const {count, increment, modify, channelList, getChannelList} = useStore() as any;
    // 注：zustand也支持按需订阅，若只需要渲染count值；可以给useState传参
    // const count=useStore((state)=>state.count);
    useEffect(() => {
        getChannelList();
    }, []);

    return (
        <div>
            <h6>十六、比redux更加简明的状态管理工具：zustand</h6>
            <div>count值: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={modify}>一次性修改</button>
            <br/>
            {channelList.map((item: IChannel) => <span key={item.id} style={{margin: '10px'}}>{item.name}</span>)}
        </div>
    )
}
export default UseZustand;