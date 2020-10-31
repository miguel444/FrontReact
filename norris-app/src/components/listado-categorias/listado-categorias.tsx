import React, { SyntheticEvent } from 'react'
import {Component} from 'react'
import { PrimaryExpression } from 'typescript';
import './listado-categorias.css'
import {getCategories} from '../../services/get_categories'
import {getRandomJoke}  from '../../services/get_random_joke'
import {getJokeByCategory}  from '../../services/get_joke_by_category'
import Loader from '../loader/loader'





export default class ListadoCategorias extends Component<{},{categorias: string[], frases: string, check: boolean}>{
    constructor(props: {}){
        super(props)
        this.state = {
            categorias: [],
            frases: "",
            check: false
        }
        this.alerta = this.alerta.bind(this);
    }

    componentWillMount(){
        getCategories().then(categorias => {
            this.setState({ categorias });
        });
    }

    alerta(e:  React.MouseEvent<HTMLLIElement>){

        this.setState({check: false})
       
        getJokeByCategory(e.currentTarget.innerText).then(frase => {
            setTimeout(()=>
            this.setState({
                frases: frase.value,
                check: true
            })
            ,2000)
        })

       

    }

    
    

    render(){
        let vista_frase;
        if(this.state.check){
            vista_frase =  <ul><li>{this.state.frases}</li></ul>
        }
        else vista_frase = <Loader message='Loading....'></Loader>
        
        return(
            <div className='vista'>
            <ul >
                {this.state.categorias.map((e: string) =>{
                    return(
                    <li key={e} onClick={this.alerta}>{e}</li>
                )
                })}

            </ul>
            {vista_frase}
           
            
    

            </div>
        )

    }
}