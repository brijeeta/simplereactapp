import ClassCounter from './CounterClassComponent'
import FunctionCounter from './CounterFunctionComponent'
import React,{useState} from "react";

// context api
export const ThemeContext = React.createContext()

function App() {
  console.log("render app")
  const [ theme,setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
    Counter
     <ClassCounter initialCount={4}/>
     CounterHooks
    <FunctionCounter initialCount={8}/>
    <button onClick={()=>setTheme(prevTheme=>{
      return prevTheme === 'red' ? 'blue' :'red'
    })}>Toggle Theme</button>
    </ThemeContext.Provider>
)
}

export default App;
