import { regalosReducer } from "../helpers/regalosReducer";
import { useForm } from "../hooks/useForm";



export const RegaloAdd = ({onNewRegalo, regalos}) => {

    const {description,onIpuntChange,onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = (event) => {

        event.preventDefault();

        if(description.length <= 1) return; 
        
        let regalo = regalos.filter(regalo => regalo.description === description);
        if (regalo.length >= 1) {
            alert('El regalo ya se encuentra dentro de la lista')
            return
        }
        

        const newRegalo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewRegalo(newRegalo);
        onResetForm();
    }

    

    return (
        <form onSubmit={onFormSubmit}>
                            <input
                                type='text'
                                placeholder='Ingrese regalo'
                                name='description'
                                value={description}
                                onChange={onIpuntChange}
                            />
                            <input
                            type='number'
                            className="inputNumber"
                            min= '0'
                            max= '100'
                            />
                            <button>Agregar</button>
                        </form>
    )
}
