import {forwardRef, Ref, useImperativeHandle, useRef, useState} from "react";

/**
 * @desc: 使用useImperativeHandle暴露方法给父组件调用
 * @author: BaoChengyi
 * 参考：https://blog.csdn.net/weixin_57017198/article/details/132994026
 *
 * 注意事项：
 * 1.useImperativeHandle要结合forwardRef使用,原因是这个钩子的第一个参数就是ref
 * 功能类似vue3中，<script setup> defineExpose({})
 *
 * 2.工作流程：
 * 2.1 useRef钩子创建ref
 * 2.2 forwardRef(function(props,ref){}),将ref传递给子组件
 * 2.3 在子组件中，通过useImperativeHandle钩子暴露方法
 * 2.4 父组件中xxxRef.current.method()
 * 3、useImperativeHandle(ref, createHandle, [deps])
 * 参数说明：
 * a. 第一个参数ref，是必须传的，是forwardRef(function(props,ref){
 *
 * })；
 * 作用是：将creteHandle方法里暴露的属性名，挂载在父组件中当前组件绑定的ref上
 *
 * b. 第二个参数：子组件暴露给父组件的方法
 * c. 第三个参数：是依赖项，依赖项不传,例如：[]，则每次渲染，都会执行
 *
 *
 *
 * */
const Son = forwardRef((props, ref: Ref<void> | undefined) => {
    const [count, setCount] = useState(0);
    // input组件的ref
    const myRef = useRef(null);
    // 2.forwardRef(function(props,ref){})，将ref传递给子组件
    console.log(props);
    // 4.要暴露给父组件的方法focus
    const inc = () => {
        // 6.通过ref.current调用子组件的方法
        setCount(count + 1);

    }
    const focus = () => {
        console.log("子组件focus方法被调用");
        myRef.current?.focus();

    }
    // 5.将子组件focus方法暴露给父组件
    // 注：必须监听count变量，否则，每次点击按钮，count只会在第一次执行时，+1;之后，点击按钮时，count不会改变了
    // 每次count变化，重新向父组件暴露方法（当前count+1）
    /**
     * @param {*}
     * 第一个参数ref：forwardRef(function(props,ref){})传入，forwardRef为了在函数组件使用ref,而引入的高级组件
     * 第二个参数cb: 该函数返回需要暴露给父组件的函数名称
     * 第三个参数deps: [],关联依赖，count每次变化时，来传递最新的inc和focus方法
     *
     * */
    useImperativeHandle(ref, () => {
        return {inc, focus}
        // }, []);
    }, [count]);
    return <>
        <div>count值：{count}</div>
        <input ref={myRef} type="text"/>
    </>
})
const UsingImperativeHandle = () => {
    // 1.useRef钩子创建引用
    const inputRef = useRef(null);

    // 2.按钮点击事件
    const handleClick = () => {
        // 3.通过ref.current调用子组件的方法
        inputRef.current?.inc();
    }
    const handleFocus = () => {
        inputRef.current?.focus();
    }
    return (<div>
        <h6>十九、useImperativeHandle暴露方法给父组件调用</h6>
        {/*3.给子组件绑定ref*/}
        <Son ref={inputRef}/>
        <button onClick={handleClick}>调用子组件计数器方法</button>
        <button onClick={handleFocus}>input文本框获得焦点</button>
    </div>)
}
export default UsingImperativeHandle;