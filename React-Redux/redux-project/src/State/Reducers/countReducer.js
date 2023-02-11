const  reducer = (state=0, action)=>{

    if(action.type==='ADDTOCART'){
        return state + action.payload
    }else if( action.type==='DELETETOCART' ){
        return state - action.payload
    }else{
        return state;
    }
}

export default reducer