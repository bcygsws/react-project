/**
 * @desc：八、react中使用上下文context实现各层级组件通信
 * 使用步骤：
 * 1.在组件内创建一个OrgContext，
 * const OrgContext = createContext(null);
 *
 * 2.在需要传递数据的组件内使用Provider包裹住需要共享的组件，
 * <OrgContext.Provider value={{name: 'context'}}>
 * </OrgContext.Provider>
 *
 * 3.在需要接收数据的组件内使用
 * const {name}=useContext(OrgContext);
 * name就可以渲染在接受到某个组件内
 *
 * 注：孙子组件GrandSon中，theme值修改为green,祖父组件中，ContextCommu中，theme值修也同时修改为blue
 * 4.1 可以这样理解，以setTheme方法是祖父组件的方法，传递给孙子组件了；孙子组件中setTheme调用了，
 * 那么祖父组件中的值，也会修改为green
 *
 * */
import {useState} from "react";
import Son from "@/components/commu_context/Son";
import GrandContext from './Context.tsx';
import {Test1} from "@/components/commu_context/Test1";

const ContextCommu = () => {
    const [theme, setTheme] = useState('red');
    return (
        <GrandContext.Provider value={{theme, setTheme}}>
            <div>
                <h4>八、context上下文实现各层级组件通信ContextCommun</h4>
                <p style={{color: theme}}>观察我的演示变化</p>
                <Son/>
                <Test1/>
            </div>
        </GrandContext.Provider>
    )
}
export default ContextCommu;