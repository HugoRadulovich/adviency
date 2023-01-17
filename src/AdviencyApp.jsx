import { useState } from "react"
import { useForm } from "./hooks/useForm"



export const AdviencyApp = () => {

    const {description,onIpuntChange, onResetForm} = useForm({
        description:'',
    })

    const [regalos, setRegalos] = useState(['Bicicleta','Auto','Pelota'])

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(description.length <= 1) return;

        const newRegalo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        setRegalos(...regalos,newRegalo);
        onResetForm();

    }

    return (
    <div className="aa">
        <div className="container">
        <div className="box">
            <h2>Regalos</h2>
            <form onSubmit={onFormSubmit}>
                <input
                type="text"
                className=""
                placeholder="Ingrese regalo"
                name="description"
                value= {description}
                onChange = {onIpuntChange}
                />
                <button>Agregar</button>
            </form>
           
            <ul>
                {
                    regalos.map(regalo =>

                        <li key={regalo.id}>{regalo.description}</li> 
                        )
                }
                {/* <li>Bicicleta</li>
                <li>Auto control remoto</li>
                <li>Pelota de futbol</li> */}
            </ul>
        </div>
       </div>
    </div>
       
    )
}
