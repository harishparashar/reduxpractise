const userReducer = (state = '', action) => {

    switch (action.type) {
        case "ADD_USER":
            // console.log("add user",state,action)
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case "DELETE_USER":
            // console.log("object",action,state)
            return {
                ...state,
                items: state.items.filter((user) => user.id !== action.payload)
            }

        case "INFO_USER":
            let userdetails = state.items.filter((user) => user.id == action.payload)
            return {
                ...state,
                user: (userdetails.length > 0) ? userdetails[0] : {}
            }

        case "UPDATE_USER":
            return {
                ...state,
                items: state.items.filter((user) => user.id !== action.payload.id ? action.payload : user)
            }

        default: return state
    }
}

export default userReducer;