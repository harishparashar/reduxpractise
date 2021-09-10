import {createStore,combineReducers} from 'redux'
import StudentReducer from './Reducers/StudentReducer'
import UserReducer from './Reducers/UserReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const mainReducer = combineReducers({
    user:UserReducer,
    student:StudentReducer
})

const commonData = {
    user:{
        items:[
            {
                id:1,name:'demo',email:'h@gmail.com',phone:1234567894
            },
            {
                id:2,name:'demo1',email:'h1@gmail.com',phone:12345678123
            }
        ]
    }
}

 const store = createStore(mainReducer,commonData,composeWithDevTools())

 export default store