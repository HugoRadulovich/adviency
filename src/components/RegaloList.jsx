


export const RegaloList = ({regalos, onDelete}) => {
    return (

        <>
            
            <ul>
                
                {  regalos.length !== 0 
            
                    ? regalos.map(regalo => 
                        <li key={regalo.id}>{regalo.description}
                        <button className="but" onClick={() => onDelete(regalo.id)}>X</button>
                        </li>
                      
                        
                    
                    )
                : <h4>No hay ningun regalo aqui. Agregue uno</h4>
                }
            </ul>
        </>
    )
}
