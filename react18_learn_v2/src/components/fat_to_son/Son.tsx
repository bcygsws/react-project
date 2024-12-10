interface PropsType{
    name:string
}
const Son = (props: Partial<PropsType>) => {
    return (
        <div>
            <h6>我是子组件</h6>
            <div>父组件传递过来的值：{props.name}</div>
        </div>
    )
}
export default Son;