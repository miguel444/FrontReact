import React from 'react'
import {Component} from 'react'
import './listado-categorias.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';




interface AppProps{
    categorias: string[],
    onListar: (e: React.MouseEvent<any>, index: number) => void,
    selectedIndex?: number
}






export default class ListadoCategorias extends Component<AppProps,{ frases: string, check: boolean}>{
    constructor(props: AppProps){
        super(props)
        this.state = {
            frases: "",
            check: false
        }
      
       
    }

    

    render(){
      
      
            
        return(
            
            <div className="listado">
            <h3> CATEGORÍAS</h3>
            <Divider />
      <List component="nav" aria-label="main mailbox folders">
          {this.props.categorias.map((element,index) => {
              return(
                <div>
                <ListItem
                button
                selected={this.props.selectedIndex === index}
                onClick={(event) => {this.props.onListar(event, index)}}
                style={{borderRadius: '20px'}}
                key={index}

              >
               
                <ListItemText style={{textAlign: 'center'}} primary={element} key={index}/>
                
              </ListItem> 
              
              </div>
              

              )
          })}
       
      
      </List>
      
      
    </div>
            
         
           
            
    

            
        )

    }
}