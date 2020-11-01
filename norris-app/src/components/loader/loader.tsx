import React from 'react'
import {Component} from 'react'

interface AppProps {
    message: string;
 }
interface AppState {
  
}

export default class Loader extends Component<AppProps,AppState>{

    constructor(props: AppProps){
        super(props)
    }

    render(){
        return(
            <p>{this.props.message}</p>
        )
    }
}