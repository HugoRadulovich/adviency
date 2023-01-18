
import React from 'react'
import { useForm } from './hooks/useForm'


const initialState = [{
    id: new Date().getTime(),
    description: "Bicicleta",
    done: false,
},
{
    id: new Date().getTime(),
    description: "Pista de carreras",
    done: false,
}
]

export const AdviencyApp = () => {

    const {description,onIpuntChange,onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = () => {
        event.preventDefault();
    }

    return (
        <>
            <div className="aa">
                <div className="container">
                    <div className="box">
                        <h2>Regalos</h2>
                        <form onSubmit={onFormSubmit}>
                            <input
                                type='text'
                                placeholder='Ingrese regalo'
                                name='description'
                                value={description}
                                onChange={onIpuntChange}
                            />
                            <button>Agregar</button>
                        </form>
                        <ul>
                            {
                                initialState.map(regalo => 
                                    <li key={regalo.id}>{regalo.description}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
