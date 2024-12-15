import {Component} from "react";

/**
 * @desc:二十、react18中写类组件
 *
 * */
class ClassCom extends Component {
    // 方式一：不写构造函数，直接使用state
    state = {
        count: 0
    }

    // 方式二：在构造函数中初始化state
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }

    // 1.类组件中，更改源数据的唯一方式是调用setState
    // 2.成员方法中，不能写const,因为类组件中，成员变量和方法修饰符必须满足要求
    // const不是类成员方法的修饰符
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>count值：{this.state.count}</p>
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }

}

export default ClassCom;