import './index.scss';
import {useSelector} from "react-redux";
import classNames from 'classnames';

const NavBar = () => {
    const {flag} = useSelector(state => state.cart);
    console.log(flag);
    return (<div className="nav-container">
        <div className="nav-left">{
            !flag ? <div className="icon"></div> : <div className="icon-active">
                <div className="count">{15}</div>
            </div>
        }
        </div>
        <div className="nav-middle">
            <div className="total">￥<span>{0.00}</span></div>
            <div className="carry-fee">预估另需配送费:￥2</div>
        </div>
        <div className={classNames('nav-right' as any, {'active': flag} as any)}>{flag ? '结算' : '￥10起送'}</div>
    </div>)

}
export default NavBar;