import { GET_BLOG_ERROR, GET_BLOG_LOADING, GET_BLOG_SUCCESS } from "./actionType";

const initialState={
    blogs:{
        loading:false,
        error:false,
        data:[]
    }
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_BLOG_LOADING:
            return{
                ...state,
                blogs:{
                    ...state.blogs,
                    loading:true
                }
            }
        case GET_BLOG_SUCCESS:
            return{
                ...state,
                blogs:{
                    ...state.blogs,
                    loading:false,
                    error:false,
                    data:action.payload
                }
            }
        case GET_BLOG_ERROR:
            return{
                ...state,
                blogs:{
                    ...state.blogs,
                    error:true
                }
            }
        default:
            return{...state}; 
    }

}