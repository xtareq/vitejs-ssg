
import {createStore} from 'vuex'

export default createStore({
    state:(()=>({
        theme:'dark'
    })),
    getters:{
        theme:state=>state.theme
    },
    mutations:{
        changeTheme:(state=>{
            state.theme = "light"
        })
    }
})