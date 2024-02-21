import { TODOS_GET_FAIL, TODOS_GET_REQUEST, TODOS_GET_SUCCESS } from "./constantTodos";

const initialState={
    isLoading:false,
    todos:[],
    error:null
}
const reducerTodos=(state=initialState,action)=>{
    switch (action.type) {
        case TODOS_GET_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case TODOS_GET_SUCCESS:
            return {
                ...state,
                isLoading:false,
                todos:action.payload
            }
        case TODOS_GET_FAIL:
            return {
                ...state,
                isLoading:false,
                todos:action.payload
            }        
    
        default:
            return state;
    }

}
export default reducerTodos;