import {useDispatch, useSelector} from "react-redux";
import {add, dec, multiInc} from "@/store/modules/counterStore.tsx";
import AsyncRedux from "@/components/react_redux/AsyncRedux";
import ReduxPersist from "@/components/react_redux/ReduxPersist";


/**
 * @desc：十三、使用更简洁的为react使用的redux
 * @author：BaoChengyi
 *
 * 环境准备：
 * 一、两个包
 * react-redux  @reduxjs/toolkit （简称RTK）
 * 1.1 react-redux是之前的redux和react包的中间件
 * 1.2 RTK工具，优点：
 * 简化了store的配置方式
 * 内置了immer支持可变式修改状态
 * 内置了thunk，更好的异步创建
 *
 * 二、装包
 * npm i react-redux @reduxjs/toolkit
 *
 * 三、使用
 * 3.1 和vue中使用pinia一样，在src/store文件夹，管理redux相关的文件
 * store/index.js
 * store/modules/counter.tsx 导出reducer和action
 *
 *  reducer给index.tsx
 *  action给视图层发布(dispatch)
 *
 *  3.2 在项目入口文件中，引入store，并使用Provider包裹根组件
 *
 *  3.3 开始书写counter.tsx的逻辑
 *
 *  3.4 在视图层使用useSelector（获取状态），useDispatch（发布action）
 *  注：{()=>dispatch(add())},其中导入的add等action函数需要执行后，才能拿到action
 *  错误写法：{()=>dispatch(add)}
 *
 *
 *  以上，就完成了react-redux +@reduxjs/toolkit管理react状态的闭环
 *
 *  三、了解redux的持久化，redux-persist
 *  参考：https://blog.csdn.net/weixin_47002803/article/details/137052547
 *  3.1 需要安装的包:redux+redux-persist
 *  3.2 redux包中的combineReducers将reducer进行合并
 *  const reducer = combineReducers({
 *      counter: counterReducer,
 *      channels: channelReducer
 *  })
 *
 * 3.3 持久化配置，配置存储键、存储引擎和黑白名单（控制哪些reducer需要持久化缓存）
 * const persistConfig={
 *     key:'root',
 *     store,
 *     whitelist:['counter'],
 *     blacklist:['channels']
 * }
 *
 * 3.3 得到持久化的reducer
 * const persistedReducer=persistReducer(persistConfig,reducer);
 *
 * 3.4 像使用redux-persist之前一样创建store
 * const store=createStore({
 *     reducer:persistedReducer,
 * });
 * export default store;
 * 3.5 根据store，创建persistor
 * export const persistor=persistStore(store);
 *
 * 3.6 在原来的基础上，内部插入PersistGate标签
 * <Provider>
 *    <PersistGate loading={null} persistor={persistor}>
 *     <App/>
 *    </PersistGate>
 * </Provider>
 *
 * */
const ReactRedux = () => {
    const dispatch = useDispatch();
    // 注：当前state状态, state.counter是reducer的key，不是createSlice里的name值
    const {count} = useSelector((state: any) => state.counter);
    return (
        <div>
            <h6>十三、使用更简洁的为react使用的react-redux+RTK</h6>
            {/*从store.tsx中导出的action是一个函数，只有执行了以后，才拿到action*/}
            <button onClick={() => dispatch(add())}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch(dec())}>-</button>
            {/*步长是2，每次点击按钮，数值+2*/}
            <button onClick={() => dispatch(multiInc(2))}>+2</button>
            <AsyncRedux/>
            <ReduxPersist/>
        </div>
    )
}
export default ReactRedux;