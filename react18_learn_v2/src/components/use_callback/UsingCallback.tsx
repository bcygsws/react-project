import {memo, useCallback, useState} from "react";

/**
 * @desc:useCallback性能优化钩子的使用
 * @author: BaoChengyi
 *
 *
 * */
// 注1：虽然使用了memo包裹了组件，但是当父组件中val中值改变时，子组件Input仍然会渲染？
// const Input = memo(({change}: { change: (a: any) => void }) => {
//     console.log("memo子组件渲染了");
//     return (<>
//             {/*向子组件传递一个函数*/}
//             <input type={"text"} onChange={(e) => change(parseInt(e.target.value) ?? null)}/>
//         </>
//     )
// });
// const UsingCallback = () => {
//     const [val, setVal] = useState(0);
//     const changeHandle = (val: any) => {
//         console.log(val);
//     }
//     return (<div>
//         <h6>十七、useCallback性能优化钩子的使用</h6>
//         <Input change={changeHandle}/>
//         <button onClick={() => setVal(val + 1)}>+1</button>
//         <div>count值：{val}</div>
//     </div>)
// }

// 注2：参数是函数，函数类型仍然是对象类型；所以memo，没有起到性能提升的作用；UsingCallback中的val值改变，组件Input仍然重新渲染了
// 解决：实现优化的方法，传参使用useCallback钩子处理,将changeHandle函数，使用useCallback来得到
const Input = memo(({change}: { change: (a: any) => void }) => {
    console.log("memo子组件渲染了");
    return (<>
            {/*向子组件传递一个函数*/}
            <input type={"text"} onChange={(e) => change(parseInt(e.target.value) ?? null)} className={"input-container"}/>
        </>
    )
});
const UsingCallback = () => {
    const [val, setVal] = useState<number>(0);
    // const changeHandle = (val: any) => {
    //     console.log(val);
    // }

    // 参照：使用useCallback钩子，实现性能优化
    const changeHandle = useCallback((val: any) => {
        console.log("val===", val);
    }, []);
    return (<div className={"callback-container"}>
        <h6>十七、useCallback性能优化钩子的使用</h6>
        <div className={"son"}>
            <Input change={changeHandle}/>
            <button onClick={() => setVal(val + 1)}>+1</button>
            <div className={"count"}>count值：{val}</div>
        </div>
    </div>)
}
export default UsingCallback;