import { regalosReducer } from "../helpers/regalosReducer";
import { useForm } from "../hooks/useForm";



export const RegaloAdd = ({onNewRegalo, regalos}) => {

    const {descriptionImg,descriptionCantidad,description,onIpuntChange,onResetForm} = useForm({
        description:'',
        descriptionCantidad: '',
        descriptionImg: '',

    });
    const onFormSubmit = (event) => {

        event.preventDefault();

        if(description.length <= 1) return; 
        console.log(descriptionCantidad)
        
        let regalo = regalos.filter(regalo => regalo.description === description);
        if (regalo.length >= 1) {
            alert('El regalo ya se encuentra dentro de la lista')
            return
        }
        
        console.log(descriptionImg)

        const newRegalo = {
            id: new Date().getTime(),
            description: description,
            img: descriptionImg,
            cantidad: descriptionCantidad,
            done: false,
        }

        onNewRegalo(newRegalo);
        onResetForm();
    }

    

    return (
        <form onSubmit={onFormSubmit}>
                            <input
                                type='text'
                                className="inputDescription"
                                placeholder='Ingrese regalo'
                                name='description'
                                value={description}
                                onChange={onIpuntChange}
                            />

                            <input
                            type='text'
                            className='inputImg'
                            placeholder='http://image..'
                            name='descriptionImg'
                            value={descriptionImg}
                            onChange={onIpuntChange}
                            />
                            

                            <input
                            type='number'
                            name='descriptionCantidad'
                            value={descriptionCantidad}
                            onChange={onIpuntChange}
                            className="inputNumber"
                            min= '0'
                            max= '100'
                            
                            />
                            <button>Agregar</button>
                        </form>
    )
}
