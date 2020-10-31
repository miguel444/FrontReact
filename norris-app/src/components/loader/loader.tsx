import React, { SyntheticEvent } from 'react'
import {Component} from 'react'

interface AppProps {
    message: string;
 }
interface AppState {
  
}

export default class Loader extends Component<AppProps,AppState>{

    constructor(props: any){
        super(props)
    }

    render(){
        return(
            <p>{this.props.message}</p>
        )
    }
}