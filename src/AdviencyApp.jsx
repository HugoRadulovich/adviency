
import React, { useReducer } from 'react'
import { RegaloAdd } from './components/RegaloAdd'
import { RegaloList } from './components/RegaloList'
import { regalosReducer } from './helpers/regalosReducer'



const initialState = [{
    id: new Date().getTime(),
    description: "Bicicleta",
    done: false,
},
{
    id: new Date().getTime() * 3,
    description: "Pista de carreras",
    done: false,
}
]

export const AdviencyApp = () => {

    const [regalos, dispatch] = useReducer(regalosReducer,initialState)

   
    const handleNewRegalo = (regalo) => {
        const action = {
            type: '[REGALO] Add Regalo',
            payload: regalo,
        }

        dispatch(action);
    }


    const handleDeleteRegalo = (id) => {

        const action = {
            type: '[REGALO] Remove Regalo',
            payload: id,
        }
        dispatch(action)

    }

    const handleDeleteTodo = () => {
        const action = {
            type: '[REGALO] Remove Total',
            
        }
        dispatch(action)
    }

    

    

    return (
        <>
            <div className="aa">
                <div className="container">
                    <div className="box">
                        <h2>Regalos</h2>
                        <RegaloAdd onNewRegalo = {handleNewRegalo}/>
                        <RegaloList regalos={regalos} onDelete={handleDeleteRegalo}/>
                        <button onClick={handleDeleteTodo}>Borrar Todo</button>
                    </div>
                </div>
            </div>
        </>
    )
}
