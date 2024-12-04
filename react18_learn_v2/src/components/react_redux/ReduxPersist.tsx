import {add, dec} from '@/store/modules/counterStore.tsx';
import {useAppDispatch, useAppSelector} from "@/hooks/hook";

const ReduxPersist = () => {
    const dispatch = useAppDispatch();
    const {count} = useAppSelector((state: any) => state.counter);
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