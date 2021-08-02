
import {createStore} from 'vuex'
let myname = 'tareq'
if(typeof window !== 'undefined'){
    myname = localStorage.getItem('name')
}
export default createStore({
    state:(()=>({
        theme:'dark',
        myname: myname
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