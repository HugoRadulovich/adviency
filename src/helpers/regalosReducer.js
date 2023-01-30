



export const regalosReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[REGALO] Add Regalo':
            return [
                ...initialState,action.payload,
            ]
        
        case '[REGALO] Remove Regalo':
            return initialState.filter(regalo => regalo.id !== action.payload)
            
            

        case '[REGALO] Remove Total':
            return [];    
        

        case '[REGALO] Edit Regalo':
            initialState.find(regalo => {
                regalo.id === action.payload
                return action.payload
            })

        
        default:
            return initialState;
    }
}
