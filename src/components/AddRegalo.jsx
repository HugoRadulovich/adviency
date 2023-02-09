
import React from 'react'
import { useForm } from '../hooks/useForm'



export const AddRegalo = () => {

    const {description,descriptionImg,descriptionNumber,onIpuntChange,onResetForm} = useForm({
        description: '',
        descriptionImg: '',
        descriptionNumber: '',
    })

    const onFormSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <form action="" className="onFormSubmit">
            <input 
            type="text" 
            className="inputText" 
            placeholder='Ingrese Regalo'
            name='description'
            value={description}
            onChange={onIpuntChange}
            />

            <input 
            type="text" 
            className="inputText"
            placeholder='Ingrese Imagen' 
            name='descriptionImg'
            value={descriptionImg}
            onChange={onIpuntChange}
            />

            <input 
            type="number" 
            className="inputNumber"
            name='descriptionNumber'
            value={descriptionNumber}
            onChange={onIpuntChange} 
            />

            <button className="btn btn-danger btnAdd">Agregar</button>
            
        </form>
    )
}
