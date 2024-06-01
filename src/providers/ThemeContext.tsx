import { Children, createContext, useState } from "react";

// export const myComtext = createContext("light");
type TContext = [
    string,
    (value: string) => void
]

export const myContext = createContext<TContext>(["", () => {}]);

export const ThemeContext = ({children} : {children: any}) => {
    
    const [topic, setTopic] = useState("light");

    return (
        // <myComtext.Provider value="light"
        <myContext.Provider value={[topic, setTopic]}>
            {children}
        </myContext.Provider>
    )
}