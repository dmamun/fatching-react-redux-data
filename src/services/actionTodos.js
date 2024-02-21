import axios from "axios"
import { TODOS_GET_FAIL, TODOS_GET_REQUEST, TODOS_GET_SUCCESS } from "./constantTodos"

export const todosAction=()=>async(dispatch)=>{
    dispatch({type:TODOS_GET_REQUEST})
    
    try {
        const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
        
        dispatch({type:TODOS_GET_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:TODOS_GET_FAIL,payload:error.message})
        
    }
}