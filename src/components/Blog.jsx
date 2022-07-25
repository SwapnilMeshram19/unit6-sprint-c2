import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getBlogError, getBlogSuccess } from "../store/action";
const Blog =()=>{
    const dispatch=useDispatch();
    const {loading, error, data}=useSelector(state=>state.blogs);

 const getBlogs=()=>{
        axios({
            method:"get",
            url:"https://unit6-sprint-c2-data.herokuapp.com/blogs"
        }).then(res=>{
            dispatch(getBlogSuccess(res.data));
        }).catch(error=>{
            dispatch(getBlogError());
        })
    }

    useEffect(()=>{
        getBlogs();
    },[])

    return (
        <div>
            {
                loading?<div>Loading..</div>:error?<div>Something Wrong Happned</div>:<table>
                {
                    data.map((el)=>{
                       return <tr key={el.id}>
                            <td>{el.title}</td>
                            <td>{el.author}</td>
                            <td>{el.publication}</td>
                            <td>{el.published_on}</td>
                        </tr>
                    })
                }
                
            </table>
            }
            

        </div>
    )
}

export default Blog;