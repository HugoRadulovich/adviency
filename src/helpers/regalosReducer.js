



export const regalosReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[REGALO] Add Regalo':
            return [
                ...initialState,action.payload,
            ]
        
        case '[REGALO] Remove Regalo':
            return initialState.filter(regalo => regalo.id !== action.payload)
            
    
        default:
            return initialState;
    }
}
