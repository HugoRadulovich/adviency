


export const RegaloList = ({regalos, onDelete}) => {
    return (

        <>
            
            <ul>
                
                {  regalos.length !== 0 
            
                    ? regalos.map(regalo => 
                        <li key={regalo.id}>
                            <img src={regalo.img} alt="" className="imgRegalo" />
                            {regalo.description} x{regalo.cantidad}
                        <button className="but" onClick={() => onDelete(regalo.id)}>X</button>
                        </li>
                      
                        
                    
                    )
                : <h4>No hay ningun regalo aqui. Agregue uno</h4>
                }
            </ul>
        </>
    )
}
