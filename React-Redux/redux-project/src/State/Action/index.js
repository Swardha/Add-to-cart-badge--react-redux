export const addtocart =(count)=>{
    return (dispatch)=>{
        dispatch({
            type:'ADDTOCART',
            payload:count
        })
    }

}


export const deletecart =(count)=>{

    return (dispatch)=>{
        dispatch({
            type:'DELETETOCART',
            payload:count
        })
    }

}