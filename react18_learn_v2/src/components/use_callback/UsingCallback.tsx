import {memo, useCallback, useState} from "react";

/**
 * @desc:useCallback性能优化钩子的使用
 * @author: BaoChengyi
 * 性能优化钩子，情形分类
 *
 * 一、不涉及函数组件绑定ref
 * 1.1 父组件传递给子组件的是简单类型，值不变时，使用memo包裹子组件，就可以实现子组件不跟随父组件渲染
 * 1.2 父组件传递给子组件的是引用类型，值不变时，使用memo包裹子组件，同时，父组件中使用useMemo()导出引用类型，例如数组；
 * 就可以实现子组件不跟随父组件渲染
 * 1.3 父组件传递给子组件的是函数，函数也是对象，Object.is()识别Input组件的传值发生了改变，就重新渲染了；传递给子组件的函数
 * 要用useCallback包裹，才能实现子组件不跟随父组件渲染
 *
 * 二、涉及函数组件绑定ref
 * 2.1 forwardRef函数组件，使用forwardRef包裹，可以解决函数组件绑定ref的问题
 * 2.2 子组件向父组件传递一个函数，使用useImperativeHandle()，可以向父组件暴露子组件的方法
 *
 * */
// 注1：虽然使用了memo包裹了组件，但是当父组件中val中值改变时，子组件Input仍然会渲染？
// 因为父组件向Input组件传递了一个函数，函数也是对象，Object.is()识别Input组件的传值发生了改变，就重新渲染了
// const Input = memo(({change}: { change: (a: any) => void }) => {
//     console.log("memo子组件渲染了");
//     return (<>
//             {/*向子组件传递一个函数*/}
//             <input type={"text"} onChange={(e) => change(parseInt(e.target.value) ?? null)} placeholder={"请输入数字"}/>
//         </>
//     )
// });
// const UsingCallback = () => {
//     const [val, setVal] = useState(0);
//     const changeHandle = (val: any) => {
//         console.log(val);
//         setVal(val);
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
            <input type={"text"} onChange={(e) => change(parseInt(e.target.value) ?? null)}
                   className={"input-container"} placeholder={"请输入数字"}/>
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
        // 子组件调用该changeHandle方法，修改val值
        // setVal(val);
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