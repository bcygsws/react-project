/**
 * @desc:context实现多层级组件通信的两种方式：
 * 参考文档：https://blog.csdn.net/qq_38951259/article/details/140242950
 * provider中value值发生变化， 会导致Consumer组件重新渲染，但是Provider组件不会重新渲染
 *
 * 1.两种方式的区别在于主在传递对象的接收方式上
 * 1.1 更简洁的方式const {theme, setTheme} =useContext(GrandContext)
 * value传递的对象，通过useContext(GrandContext)拿到
 *
 * 1.2 使用更容易的理解的方式：Provider/Consumer发送和接收
 * 但是Consumer内只能有一个子元素，下例中：<></>保证返回的是一个子元素
 * {
 *     (value)=>{
 *         return <>
 *
 *         </>
 *     }
 * }
 *
 * 2.react的React.createContext() 和类组件中的contextType
 * static contextType是一种在类组件中直接访问context（定义在组件外部，context.tsx导出的）的方式，不必明确的传递一个
 * Context.Consumer;它不定义在组件内部，也不定义在render函数内部或者组件的类体内部
 *
 * 3.定义Test1.tsx组件演示 class类组件中的contextType
 *
 * 综上：实现跨层级通信有三种方式了：
 * 1.const Context=createContext()之Context.Provider+useContext
 * 2.const Context=createContext()之Context.Provider+Context.Consumer,要使用包含单个子元素的函数
 * <Context.Consumer>
 * {(value)=>{
 *     <>
 *         return <div>{value}</div>
 *     </>
 * }
 * </Context.Consumer>
 *
 * 3.class类组件中的contextType
 * const Context=createContext()之Context.Provider+ static contextType=context;
 *
 *
 *
 *
 * */

// import {useContext} from "react";
import GrandContext from './Context';

const GrandSon = () => {
    // 排除掉null的情况，使用！断言一下

    // 一、接收其他层级组件传值:方式一，不使用Consumer
    // const {theme, setTheme} = useContext(GrandContext)!;
    // return (
    //     <div>
    //         <h6>我是GrandSon组件</h6>
    //         <p style={{color: theme}}>当前主题是：</p>
    //         <button onClick={() => setTheme('green')}>点击按钮，实际上是调用传值的那个组件里的方法</button>
    //
    //     </div>
    // )

    // 二、使用Consumer,要以函数的形式接收值
    return (
        <GrandContext.Consumer>
            {
                // 函数的参数是接收到的值，这里接收到的值就是 GrandContext.Provider 传递的值
                (value) => {
                    return <>
                        <h6>我是GrandSon组件</h6>
                        <p style={{color: value?.theme}}>当前主题是：</p>
                        <button onClick={() => value?.setTheme('green')}>点击按钮，实际上是调用传值的那个组件里的方法
                        </button>
                    </>
                }
            }
        </GrandContext.Consumer>
    )
}
export default GrandSon;