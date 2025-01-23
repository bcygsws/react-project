import {useEffect} from "react";

export interface Item {
    id: number;
    name: string;
}

const MapRedux = (props: any) => {
    // 从映射的结果props中解构出来的，都是mapStateToProps和mapDispatchToProps返回对象的键---key
    const {onIncrement, onDecrement, init, list, onAsyncGetChannel, num} = props;
    useEffect(() => {
        onAsyncGetChannel();
    }, [])
    console.log("list", list);
    console.log("init", init);
    return (
        <div>
            <h6>三、使用两个map方法实现redux状态管理</h6>
            <button onClick={() => onIncrement()}>+</button>
            <button onClick={() => onDecrement()}>-</button>
            <span>init计数值：{init}</span>
            <ul style={{listStyle: 'none', display: 'flex', flexFlow: 'row wrap'}}>
                {
                    list.map((item: Item) => (
                        <li key={item.id} style={{margin: '0 20px'}}>{item.name}</li>))
                }
            </ul>
            <div>num值：{num}</div>
        </div>
    )
}
export default MapRedux;