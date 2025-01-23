import {memo, useMemo, useState} from "react";

/**
 * @desc:memo提升性能
 * 问：父组件渲染了，子组件作为父组件的一部分，也会跟随这种渲染
 * 如果，传入子组件的属性没有变化，子组件重新渲染会造成性能的浪费
 *
 * 解决：使用React.memo(组件)
 * 原理：memo(组件)，其内部的每个props会通过Object.is()方法进行比较，相同返回true;不同返回false
 *
 * Object.is()
 * 简单类型：Object.is(3,3)  true
 * 引用类型：Object.is([],[])  false,不是true的原因，对于引用类型，每次比较时，会创建新的引用对象，所以
 * 才有[]和[]在Object.is()中比较为false的情况
 *
 *
 * */

// 1.原始情况，没有使用memo
// const Son = () => {
//     console.log('子组件son渲染了……');
//     return (
//         <div>
//             <h6>这是一个son子组件</h6>
//         </div>
//     )
// }
// const MyMemo = () => {
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <h6>十五、memo提升性能</h6>
//             <div>{count}</div>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <Son></Son>
//         </div>
//     )
// }

// 2.不传参---使用memo后；子组件MemoSon，在初始时渲染一次；再更改count值，子组件就不会再渲染了
// const MemoSon = memo(function Son() {
//     console.log('子组件son渲染了……');
//     return (
//         <div>
//             <h6>这是一个son子组件</h6>
//         </div>
//     )
// })
// const MyMemo = () => {
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <h6>十五、memo提升性能</h6>
//             <div>count值：{count}</div>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <MemoSon/>
//         </div>
//     )
// }

// 3.传基本类型参数---count值改变时，由于使用了memo包裹组件，内部会触发，对组件参数num的比较；Object.is(newNum,oldNum)
// 结果是true
// const MemoSon = memo(function Son({num}: { num: number }) {
//     console.log('我是子组件son，跟随父组件一起渲染了……');
//     return (
//         <div>
//             <h6>这是一个son子组件</h6>
//             <div>父组件传递值：{num}</div>
//         </div>
//     )
// })
// const MyMemo = () => {
//     const [count, setCount] = useState(0);
//     const num = 2;
//
//     return (
//         <div>
//             <h6>十五、memo提升性能</h6>
//             <div>count值：{count}</div>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <MemoSon num={num}/>
//         </div>
//     )
// }

// 4.传引用类型参数---count值改变时，由于使用了memo包裹组件，内部会触发，对组件参数num的比较；Object.is(newNum,oldNum)
// 结果是false---Object.is([1,2,3],[1,2,3]),两次是不同的对象，栈中的地址不同了
// const MemoSon = memo(function Son({num}: { num: number[] }) {
//         console.log('我是子组件son，跟随父组件一起渲染了……');
//         return (
//             <div>
//                 <h6>这是一个son子组件</h6>
//                 <div>父组件传递值：{num}</div>
//                 {
//                     num.map((item, index) => <div key={index}>{item}</div>)
//                 }
//             </div>
//         )
//     })
//
// const MyMemo = () => {
//     const [count, setCount] = useState(0);
//     const num = [1, 2, 3];
//
//     return (
//         <div>
//             <h6>十五、memo提升性能</h6>
//             <div>count值：{count}</div>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <MemoSon num={num}/>
//         </div>
//     )
// }


// 5.memo对组件传引用类型时，失效；解决办法：数据源num从useMemo中得到，useMemo有缓存机制,不创建新的参数对象{num},都从缓存中取值
const MemoSon = memo(function Son({num}: { num: number[] }) {
    console.log('我是子组件son，跟随父组件一起渲染了……');
    return (
        <div>
            <h6>这是一个son子组件</h6>
            <div>父组件传递值：{num}</div>
            {
                num.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>
    )
})

const MyMemo = () => {
    const [count, setCount] = useState(0);
    // const num = [1, 2, 3];
    // 注入子组件的num,从useMemo缓存中拿到
    const num = useMemo(() => [1, 2, 3], [])

    return (
        <div>
            <h6>十五、memo提升性能</h6>
            <div>count值：{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <MemoSon num={num}/>
        </div>
    )
}
export default MyMemo;