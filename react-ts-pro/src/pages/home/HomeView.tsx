import GenericParams from "../../components/generic_params/GenericParams.tsx";
import UnitedType from "../../components/united_type/UnitedType.tsx";
import UsingPropsType from "../../components/son_com_props/UsingPropsType.tsx";
import UsingSonChildrenType from "../../components/son_com_children_type/UsingSonChildrenType.tsx";
import UsingEventType from "../../components/event_type/UsingEventType.tsx";

const HomeView = () => {
    return (<div>
        <h1>这是HomeView组件</h1>
        {/*一、泛型参数*/}
        <GenericParams/>
        {/*二、useState初始值类型不明确null或者联合类型*/}
        <UnitedType/>
        {/*三、子组件传参props类型注解*/}
        <UsingPropsType/>
        {/*四、为props属性中的children内置了类型注解*/}
        <UsingSonChildrenType/>
        {/*五、为props事件添加类型注解*/}
        <UsingEventType/>

    </div>)
};
export default HomeView;