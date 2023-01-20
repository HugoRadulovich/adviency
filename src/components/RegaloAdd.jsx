import { useForm } from "../hooks/useForm";



export const RegaloAdd = ({onNewRegalo}) => {

    const {description,onIpuntChange,onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = (event) => {

        event.preventDefault();

        if(description.length <= 1) return; 
        

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
                            <button>Agregar</button>
                        </form>
    )
}
