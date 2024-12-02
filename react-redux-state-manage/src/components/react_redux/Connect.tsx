import {asyncGetChannel, decrement, increment} from "@/store/modules/map/actions.tsx";
import {connect} from "react-redux";
import MapRedux from "@/components/react_redux/MapRedux.tsx";

const mapStateToProps = (state: any) => {
    return {
        init: state.mapping.init,
        list: state.mapping.list,
        num: state.num.num// 返回num名的reducer对应的变量num，也是可以的，不局限于一个reducer
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onAsyncGetChannel: () => dispatch(asyncGetChannel())
    }
}
// 将state和dispatch映射到组件MapRedux的props属性上
export default connect(mapStateToProps, mapDispatchToProps)(MapRedux);