import React, {useEffect,useState} from 'react';
import './App.css';
import ListadoCategorias from './components/listado-categorias/listado-categorias'
import {getCategories} from './services/get_categories'
import {getJokeByCategory} from './services/get_joke_by_category'
import Divider from '@material-ui/core/Divider';
import TablaResultados from './components/tabla-resultados/tabla-resultados'
import DetallesItem from './components/detalles-item/detalles-item'


interface Joke{
  value: string,
  icon_url: string,
  created_at: string

}




function App() {

  const [listado_categorias, setListado] = useState([]);
  const[categoria_selccionada, setCategoria] = useState(0);
  const [frases,setFrases] = useState(new Array);
  const [broma_seleccionada, setJoke] = useState<Joke>({
    value: "",
    icon_url: "",
    created_at: ""
  })

  const getJoke = (e:  React.MouseEvent<any>,index: number) => {
    getJokeByCategory(listado_categorias[index]).then(frase=> {
        
          setCategoria(frase.categories);
          let frases_ant = frases.slice()
          frases_ant.push(frase)
          setFrases(frases_ant)
          setCategoria(index)
        

        
         
    })

  }

  const getJokesByText = (e:  React.MouseEvent<HTMLButtonElement>,text: string) => {
    getJokeByCategory(text).then(frase => {
        setTimeout(()=>
          setCategoria(frase.categories)
          ,1000)
    })

  }

  const selectJoke = (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => {
    setJoke(joke)
  }

  const deleteJoke = (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => {
    setFrases(frases.filter(frase => frase.value !== joke.value))
  }

  
 
  useEffect( () => {
    getCategories().then(data => {
      setListado (data)  
        })
  }, []);
 

  return (
    <div className='view'>
     
     <ListadoCategorias categorias={listado_categorias} onListar={getJoke} selectedIndex={categoria_selccionada}> </ListadoCategorias>
    
     <TablaResultados frases={frases} onSeeMore={selectJoke} OnDelete={deleteJoke}></TablaResultados>
     <Divider orientation="vertical" flexItem />
     <DetallesItem item={broma_seleccionada}></DetallesItem>
     
     
     </div>
  );
}



export default App;
