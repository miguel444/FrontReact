import {Component} from 'react'
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './tabla-resultados.css'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import CancelIcon from '@material-ui/icons/Cancel';

interface Joke{
  value: string,
  icon_url: string,
  created_at: string,
  url: string,
  updated_at: string,
  categories: []
}

interface AppProps {
    frases: Array<Joke>
    onSeeMore: (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => void,
    OnDelete: (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => void,
    onRandom: (e: React.MouseEvent<HTMLButtonElement>) => void

}

interface AppState {

}

const mystyle = {
  backgroundColor: "Transparent",
  backgroundRepeat:"no-repeat",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  outline:"none"
  }

 



export default class TablaResultados extends Component<AppProps,AppState>{
   

   
    
    render(){
       
        return(
          <div className="table">
            <button onClick={this.props.onRandom} style={{borderRadius: '25px',padding: '5px 5px', marginBottom: '10px',backgroundColor:'rgb(145, 137, 137)', color: 'white',fontWeight: 'bold',
                  backgroundRepeat:"no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline:"none"}}>Generar frase aleatoria</button>
            <TableContainer component={Paper}>
      <Table aria-label="simple table"   className='table-rows' >
        <TableHead style={{backgroundColor: '#3f51b5'}}>
          <TableRow>
            <TableCell><h2 style={{color: 'white'}}>Historial de resultados</h2></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.frases.length > 0 ?
          this.props.frases.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
              <TableCell align="right"><button style={mystyle} onClick={(ev) => this.props.onSeeMore(ev,row)}><FormatListBulletedOutlinedIcon style={{color: "#3f51b5"}}></FormatListBulletedOutlinedIcon></button></TableCell>
              <TableCell align="right"><button style={mystyle} onClick={(ev) => this.props.OnDelete(ev,row)}><CancelIcon style={{color: "red"}}></CancelIcon></button></TableCell>

            </TableRow>
          )) : <TableRow >
          <TableCell component="th" scope="row">
            No se han encontrado resultados...
          </TableCell>

        </TableRow>}
    
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        )
    }



}