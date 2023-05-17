import * as types from './actionTypes'

const initialState={
    user:{},
    admin:{},
    users:[],
    loading :true
}

const UserReducers =(state=initialState,action) =>{
    switch(action.type){
        case types.GET_USER :return{...state,users:action.payload,loading :false};
        case types.GET_SINGLE_USER :return{...state,user : action.payload, loading:false};
        case types.GET_ADMIN :return{...state,admin : action.payload,loading : false};
        case types.DELETE_USER : return{};
        case types.UPDATE_USER :return{};
        default : return state;
    }
}


export default UserReducers;
