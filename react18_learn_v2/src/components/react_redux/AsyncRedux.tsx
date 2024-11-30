import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchList} from "@/store/modules/channelStore.tsx";

export interface IChannel {
    id: number;
    name: string;
}

const AsyncRedux = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchList());// 它是一个Promise对象
        console.log('dispatch结果：', dispatch(fetchList()));
    }, [dispatch]);
    const {list} = useSelector((state: any) => state.channels);
    return (
        <div>
            <h6>AsyncRedux,异步操作，使用react-redux+RTK</h6>
            {
                list.map((item: IChannel) => <span key={item.id} style={{margin: '0 10px'}}>{item.name}</span>)
            }
        </div>
    )
}
export default AsyncRedux;