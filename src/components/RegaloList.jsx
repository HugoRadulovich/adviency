


export const RegaloList = ({regalos, onDelete}) => {
    return (
        <>
            <ul>
                {
                    regalos.map(regalo => 
                        <li key={regalo.id}>{regalo.description}
                        <button className="but" onClick={() => onDelete(regalo.id)}>X</button>
                        </li>
                        
                        
                    
                    )
                }
            </ul>
        </>
    )
}
