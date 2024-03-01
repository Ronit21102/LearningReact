import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Counter = ()=>{
    const {count,setCount} = useContext(CounterContext);
    return(
        <div>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default Counter