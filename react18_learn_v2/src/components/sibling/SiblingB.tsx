const SiblingB = ({val}: { val: number }) => {
    return (
        <div>
            <h6>SiblingB子组件</h6>
            <div>SiblingB</div>
            <div>SiblingA传给兄弟组件的值:{val}</div>
        </div>
    )
}
export default SiblingB;