import React, {createContext} from "react";

export type IContext = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
export default createContext<IContext | null>(null);