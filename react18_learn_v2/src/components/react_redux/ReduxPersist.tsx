import {add, dec} from '@/store/modules/counterStore.tsx';
import {useDispatch, useSelector} from "react-redux";

const ReduxPersist = () => {
    const dispatch = useDispatch();
    const {count} = useSelector((state: any) => state.counter);
    return (
        <div>
            <h6>ReduxPersist,redux持久化</h6>
            <button onClick={() => dispatch(add())}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch(dec())}>-</button>
        </div>
    );
}
export default ReduxPersist;