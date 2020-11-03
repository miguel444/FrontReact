import {Component} from 'react'
import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './detalles-item.css'
import DeleteIcon from '@material-ui/icons/Delete';

interface Joke{
  value: string,
  icon_url: string,
  created_at: string,
  url: string,
  updated_at: string,
  categories: []
}

interface AppProps {

    item: Joke,
    OnDelete: (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => void

    
}

interface AppState {

    
}

const mystyle = {
  backgroundColor: "Transparent",
  backgroundRepeat:"no-repeat",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  outline:"none",
  }



export default class DetallesItem extends Component<AppProps,AppState>{
 

    render(){
        
        return(
            <div className="details">
              <div  className ='bar' style={{margin:'40px 40px 0px 40px'}}>
                <h2 style={{fontSize: '30px',marginTop: '15px', marginRight: '50%'}}> Detalles </h2>
                <button style={mystyle}><CreateIcon  style={{fontSize: '30px'}}></CreateIcon></button>
                <button onClick= {(ev) => this.props.OnDelete(ev,this.props.item)} style={mystyle}><DeleteIcon  style={{fontSize: '30px'}}></DeleteIcon></button>
                
              </div>
              {this.props.item.value.length > 0 ?
              <div style={{margin: ' 0px 40px',fontSize: '18px'}}>
                <p>{this.props.item.value}</p>
               
              {this.props.item.categories.length > 0 ? <p><b>Categoría : </b>{this.props.item.categories}</p> : <p><b>Categoría : </b> random</p>}
                <p > <b>Creado en :</b> {this.props.item.created_at}</p>
                <p > <b>Actualizado en :</b> {this.props.item.updated_at}</p>
                <a style={{fontSize: '14px'}} href= {this.props.item.url}> {this.props.item.url} </a>
                <div style={{textAlign: 'center',marginTop: '40px'}}>
                <img src={this.props.item.icon_url} height='100px' width='100px' alt='imagen_chuck'></img>
                </div>
              </div> : <p></p>}
      

              
           
          </div>

        )
    }
    
}