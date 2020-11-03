import React, {useEffect,useState} from 'react';
import './App.css';
import ListadoCategorias from './components/listado-categorias/listado-categorias'
import {getCategories} from './services/get_categories'
import {getJokeByCategory} from './services/get_joke_by_category'
import TablaResultados from './components/tabla-resultados/tabla-resultados'
import DetallesItem from './components/detalles-item/detalles-item'
import Buscador from './components/buscador/buscador'
import {getRandomJoke} from './services/get_random_joke'


interface Joke{
  value: string,
  icon_url: string,
  created_at: string
  url: string,
  updated_at: string

}




function App() {

  const [listado_categorias, setListado] = useState([]);
  const[categoria_selccionada, setCategoria] = useState(0);
  const [frases,setFrases] = useState( JSON.parse(localStorage.getItem('frases') || "") || new Array);
  const [broma_seleccionada, setJoke] = useState<Joke>({
    value: "",
    icon_url: "",
    created_at: "",
    url: "",
    updated_at: ""
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


  const getRandom =  (e: React.MouseEvent<HTMLButtonElement>) => {
    getRandomJoke().then(frase => {
      let frases_ant = frases.slice()
      frases_ant.push(frase)
      setFrases(frases_ant)
    })
  

  }



  const selectJoke = (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => {
    setJoke(joke)
  }

  const deleteJoke = (e: React.MouseEvent<HTMLButtonElement>, joke: Joke) => {
    setFrases(frases.filter((frase: Joke) => frase.value !== joke.value))
    if(broma_seleccionada.value === joke.value){
      setJoke({
      value: "",
      icon_url: "",
      created_at: "",
      url: "",
      updated_at: ""
    })
  }
}
  

useEffect(() => {
  
  localStorage.setItem('frases', JSON.stringify(frases));
}, ['frases', frases]);

useEffect( () => {

  
  getCategories().then(data => {
      setListado (data)  
  })

  
}, []);
 

  return (
    <div>
       <Buscador></Buscador>
    <div className='view'>
    
     <ListadoCategorias categorias={listado_categorias} onListar={getJoke} selectedIndex={categoria_selccionada}> </ListadoCategorias>
     <TablaResultados frases={frases} onSeeMore={selectJoke} OnDelete={deleteJoke} onRandom={getRandom}></TablaResultados>
     
     <DetallesItem item={broma_seleccionada} OnDelete={deleteJoke}></DetallesItem>
     
     
     </div>
     </div>
  );
}



export default App;
