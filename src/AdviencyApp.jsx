import { AddRegalo } from "./components/AddRegalo"
import { RegaloList } from "./components/RegaloList"



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


export const AdviencyApp = () => {


    

    return (
        <>
            
                
                    <div className="container border d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Regalos</h5>
                            <AddRegalo/>
                            <RegaloList/>
                        </div>
                            
                    </div>
                    </div>
                

        </>
    )
}
