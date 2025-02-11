import {forwardRef, LegacyRef, useRef} from "react";
/**
 * @desc：十八、forwardRef和useRef的使用
 * 场景：react18推荐使用函数式组件
 * 当为函数式组件中，使用ref，会报警告：函数组件不能被赋予refs？
 *
 * 解决：
 * 使用forwardRef创建要绑定ref的子组件
 *
 * const Son=forwardRef((props,ref:LegacyRef<HTMLInputElement>))=>{
 *     return <>
 *         <input ref={ref} type="text"/>
 *     </>
 *
 * })
 *
 *
 *
 *
 *
 * */

// const Son = ({ref}) => {
//     return <>
//         <input ref={ref} type="text"/>
//     </>
// }
// const Forward = () => {
//     const showRef = useRef(null);
//     console.log("showRef===", showRef); // showRef=== {current:null}
//     /*
//     * Warning: Function components cannot be given refs.
//     * Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//     *
//     * */
//     return (<div>
//         <h6>十八、forwardRef和useRef的使用</h6>
//         <Son ref={showRef}/>
//     </div>)
// }


// 解决上述警告；因为在函数式组件中，无法被赋予refs;访问ref失败，你可以使用React.forwardRef()来解决问题
// const Son = ({ref}) => {
//     return <>
//         <input ref={ref} type="text"/>
//     </>
// }
const Son = forwardRef((props, ref: LegacyRef<HTMLInputElement>) => {
    console.log("props===", props);
    return <>
        <input ref={ref} type="text"/>
    </>
})
const Forward = () => {
    const showRef: LegacyRef<HTMLInputElement> | undefined = useRef(null);
    // console.log("showRef===", showRef); // showRef=== {current:null}
    const showRefHandler = () => {
        console.log("showRef.current===", showRef.current);// showRef.current=== <input type="text"/>
        showRef.current?.focus();
    }
    // 渲染完成，使得input立即获得焦点
    // useEffect(() => {
    //     showRef.current?.focus();
    // }, [])
    /*
    * Warning: Function components cannot be given refs.
    * Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
    *
    * */
    return (<div>
        <h6>十八、forwardRef和useRef的使用</h6>
        <Son ref={showRef}/>
        <button onClick={showRefHandler}>获取showRef</button>
    </div>)
}
export default Forward;