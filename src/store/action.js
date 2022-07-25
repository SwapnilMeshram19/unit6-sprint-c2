import { GET_BLOG_ERROR, GET_BLOG_LOADING, GET_BLOG_SUCCESS } from "./actionType"

export const getBlogLoading=()=>{
    return{
        type:GET_BLOG_LOADING
    }
}

export const getBlogSuccess=(payload)=>{
    return{
        type:GET_BLOG_SUCCESS,
        payload
    }
}

export const getBlogError=()=>{
    return{
        type:GET_BLOG_ERROR
    }
}