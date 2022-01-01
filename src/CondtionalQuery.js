import React,{useState} from 'react'
import { useQuery } from 'react-query'

const CondtionalQuery = () => {

    const [state,setState] = useState(false);

    const fetcher = () =>{
        return new Promise(resolve =>{
            return setTimeout(() => {
                resolve(500)
            }, 1000);
        })
    }

    useQuery(['todo-single-item',1],fetcher,{
        enabled : state
    })
    return (
        <div>
            <button onClick={()=>{setState(state => !state)}}>Conditional Query Run</button>
        </div>
    )
}

export default CondtionalQuery
