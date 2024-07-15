import {useState, memo, useMemo} from "react";
import "./index.less";

/**
 * @name：MemoPromote
 * @description:和useMemo钩子一样，memo也是一个提升性能的方法
 *
 * 注：react的渲染机制：当父组件重新渲染后，子组件会跟着重新渲染
 * 如果，传入子组件的属性，没有变化；子组件跟随父组件而重新渲染，会造成浪费？
 *
 * 解决：使用React.memo()方法规避这种浪费，使得只要注入子组件的props不变，子组件就不重新渲染了
 *
 * @React.memo()内部的比较机制：React中的每一个props,会使用Object.is()比较新值和旧值，返回true,
 * 表示props没有变化
 * 1.比较简单类型数据 和 引用类型数据（对象/数组）
 * Object.is(3,3)   true
 * Object.is([],[])  却是false，解释：每次组件函数执行，里面的引用数据重新创建，会生成新的引用，
 * 所以才有[]和[]比较为false的情况
 *
 *
 *
 * */

// 1.没有使用memo方法时，

// const Son = () => {
// 	console.log("我跟随父组件的一起渲染了");
// 	return (<div>
// 		我是Son子组件
// 	</div>)
// }
// const MemoPromote = () => {
// 	const [count, setCount] = useState(0);
//
// 	return (<div>
// 		<h2>十四、使用React.memo方法，节省不必要的子组件渲染</h2>
// 		<button onClick={() => setCount(count + 1)}>+1</button>
// 		<Son></Son>
// 	</div>);
// }

/**
 *
 * @description：使用memo方法后,将子组件作为参数传入后，形成新的组件，
 * 引入父组件中；就会发现，再改变父组件时，子组件并没有跟随父组件
 * 一起渲染了
 *
 * */
// const Son = () => {
// 	console.log("我跟随父组件的一起渲染了");
// 	return (<div>
// 		我是Son子组件
// 	</div>)
// }

// 2.使用memo方法后
// const MemoSon = memo(function Son() {
// 	console.log("我跟随父组件的一起渲染了");
// 	return (<div>
// 		我是Son子组件
// 	</div>);
// });
// const MemoPromote = () => {
// 	const [count, setCount] = useState(0);
//
// 	return (<div className="memo-fun-container">
// 		<h2>十四、使用React.memo方法，节省不必要的子组件渲染</h2>
// 		<button onClick={() => setCount(count + 1)}>+1</button>
// 		<div>{count}</div>
// 		{/*<Son></Son>*/}
// 		<MemoSon/>
// 	</div>);
// }

// 3.props注入的是简单类型，且值没有改变时，Object.is(3,3) true;父组件渲染时，子组件不会跟随渲染
// const MemoSon = memo(function Son({count}) {
// 	console.log("我跟随父组件的一起渲染了");
// 	return (<div>
// 		我是Son子组件{count}
// 	</div>);
// });
// const MemoPromote = () => {
// 	const [count, setCount] = useState(0);
// 	const num = 100;
// 	return (<div className="memo-fun-container">
// 		<h2>十四、使用React.memo方法，节省不必要的子组件渲染</h2>
// 		<button onClick={() => setCount(count + 1)}>+1</button>
// 		<div>{count}</div>
// 		{/*<Son></Son>*/}
// 		<MemoSon count={num}/>
// 	</div>);
// }

// 4.当props注入的是引用类型时，观察子组件是否渲染了？
// 结果：对于注入的是不可变的引用类型props时，即使props不变，也会触发子组件的跟随渲染
// 解决：使用useMemo返回list, useMemo就有在渲染中缓存数据不重新渲染的作用
// const MemoSon = memo(function Son({count}) {
// 	console.log("我跟随父组件的一起渲染了");
// 	return (<div>
// 		我是Son子组件{count}
// 	</div>);
// });
// const MemoPromote = () => {
// 	const [count, setCount] = useState(0);
// 	// 解释：count变化驱动父组件渲染，此时list数组的引用，重新创建；这个引用，和父组件函数上次执行时的引用，并不是
// 	// 同一个引用
// 	const list = [1, 2, 3];
// 	return (<div className="memo-fun-container">
// 		<h2>十四、使用React.memo方法，节省不必要的子组件渲染</h2>
// 		<button onClick={() => setCount(count + 1)}>+1</button>
// 		<div>{count}</div>
// 		{/*<Son></Son>*/}
// 		<MemoSon count={list}/>
// 	</div>);
// }

const MemoSon = memo(function Son({count}) {
	console.log("我跟随父组件的一起渲染了");
	return (<div>
		我是Son子组件{count}
	</div>);
});
const MemoPromote = () => {
	const [count, setCount] = useState(0);
	// 解释：count变化驱动父组件渲染，此时list数组的引用，重新创建；这个引用，和父组件函数上次执行时的引用，并不是
	// 同一个引用
	// 使用useMemo钩子后，list不变就从缓存中直接取值，就可以避免子组件跟随父组件的不必要的渲染
	const list = useMemo(() => {
		return [1, 2, 3];
	}, [])
	return (<div className="memo-fun-container">
		<h2>十四、使用React.memo方法，节省不必要的子组件渲染</h2>
		<button onClick={() => setCount(count + 1)}>+1</button>
		<div>{count}</div>
		{/*<Son></Son>*/}
		<MemoSon count={list}/>
	</div>);
}
export default MemoPromote;