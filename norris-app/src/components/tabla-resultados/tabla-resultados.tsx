import {Component} from 'react'
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './tabla-resultados.css'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import CancelIcon from '@material-ui/icons/Cancel';

interface Joke{
  value: string,
  icon_url: string,
  created_at: string
}

interface AppProps {
    frases: Array<Joke>
    onSeeMore: (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => void,
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
  outline:"none"
  }

 


function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


export default class TablaResultados extends Component<AppProps,AppState>{
    constructor(props: AppProps){
        super(props)
        console.log(props.frases)
    }

   
    
    render(){
       
        return(
          <div className="table">
            
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Historial de resultados</h2></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.frases.length > 0 ?
          this.props.frases.map((row) => (
            <TableRow key={row.value}>
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
              <TableCell align="right"><button style={mystyle} onClick={(ev) => this.props.onSeeMore(ev,row)}><FormatListBulletedOutlinedIcon style={{color: "blue"}}></FormatListBulletedOutlinedIcon></button></TableCell>
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