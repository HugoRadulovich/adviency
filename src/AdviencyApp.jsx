
import React, { useEffect, useReducer } from 'react'
import { Modal } from './components/Modal'
import { RegaloAdd } from './components/RegaloAdd'
import { RegaloList } from './components/RegaloList'
import { regalosReducer } from './helpers/regalosReducer'



const initialState = [{
    id: new Date().getTime(),
    description: "Bicicleta",
    cantidad: 1,
    done: false,
},
{
    id: new Date().getTime() * 3,
    description: "Pista de carreras",
    cantidad: 1,
    done: false,
}
]

const init = () => {
    return JSON.parse(localStorage.getItem('regalos')) || []
}

export const AdviencyApp = () => {

    const [regalos, dispatch] = useReducer(regalosReducer,initialState,init )


    useEffect(() => {
        localStorage.setItem('regalos',JSON.stringify(regalos))
    }, [regalos])
    


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
                        <Modal handleNewRegalo={handleNewRegalo} regalos={regalos}/>
                        <RegaloList regalos={regalos} onDelete={handleDeleteRegalo} />
                        <button onClick={handleDeleteTodo}>Borrar Todo</button>
                    </div>
                </div>
            </div>
        </>
    )
}
