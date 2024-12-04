import {useEffect} from "react";
import {fetchList} from "@/store/modules/channelStore.tsx";
import {useAppDispatch, useAppSelector} from "@/hooks/hook";

export interface IChannel {
    id: number;
    name: string;
}

const AsyncRedux = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchList());// 它是一个Promise对象
        console.log('dispatch结果：', dispatch(fetchList()));
    }, [dispatch]);
    const {list} = useAppSelector((state: any) => state.channels);
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