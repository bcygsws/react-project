interface PropsType{
    name:string
}
// 注意：ts中Partial<>：将类型中的所有属性设置为可选
const Son = (props: Partial<PropsType>) => {
    return (
        <div>
            <h6>我是子组件</h6>
            <div>父组件传递过来的值：{props.name}</div>
        </div>
    )
}
export default Son;