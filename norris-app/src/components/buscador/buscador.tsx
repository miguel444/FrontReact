import {ChangeEvent, Component} from 'react'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import {getTextSearch} from '../../services/get_text_search'

interface AppProps{
    
}

interface AppState{
    palabra_buscada: string
    busqueda: Array<any>
}

export default class Buscador extends Component<AppProps,AppState>{

    constructor(props: AppProps) {
        super(props);
        this.state = {
            palabra_buscada: "",
            busqueda: []
        }
        this.buscar = this.buscar.bind(this)
        
    }

    buscar(e: ChangeEvent<HTMLTextAreaElement>){
        this.setState({
            palabra_buscada:  e.target.value
        })

        
        if(this.state.palabra_buscada.length >=3){
        getTextSearch(e.target.value).then(data => {
            
            this.setState({
                busqueda: data.result
            })
            console.log(data.result)
            
        })}
        else{
            this.setState({
                busqueda: []
            })
        }
       
        

       

    
}

    render(){
        return(
            <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.buscar}/>
            <ul>
                {this.state.palabra_buscada.length>=3 ?
                this.state.busqueda.map(element => {
                    return(
                        <li>{element.value}</li>
                    )
                })
                : <li> No se han encontrado resultados</li>
            }
            </ul>
            </div>
            

        )
    }
    
    
}