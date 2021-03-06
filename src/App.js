import "./styles/App.scss";
import axios from 'axios';
import { useState , useEffect} from 'react';
import Navigation from './Navigation.js';
import Title from './Title.js';
import Loading from './Loading.js';
import Footer from './Footer';


function App() {
  const [comicsArray , setComicsArray ] = useState([]);
  const [chosenCharacter , setChosenCharacter] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  
  const publicApiKey = "7dcc9e9b44bc9c6511df39ec67f8c47a";
  const baseUrl = "https://gateway.marvel.com";
  
  useEffect(() => {
    axios({
        method: 'GET',
        url : `${baseUrl}:443/v1/public/events`,
        params: {
          limit: 100,
          apikey: publicApiKey,
          ts: 1,
          hash:"22d5dd4d3d56b75599097ae231e28f79",
        },
        })
        .then((comicResponse)=>{
          const comicApiResults = comicResponse.data.data.results; 
          setComicsArray(comicApiResults)
          setIsLoading(false)
        })
   
  }, []);
    
  useEffect(() => {
      axios({
          method: 'GET',
          url : `${baseUrl}:443/v1/public/characters`,
          params: {
            nameStartsWith: 'Spider',
              limit: 100,
              apikey: publicApiKey,
              ts: 1,
              hash:"22d5dd4d3d56b75599097ae231e28f79",
          },
          })
          .then((response)=>{
            const apiResults = response.data.data.results; 

            const descriptionFilter = apiResults.filter((charactersWithDes) => {
              return(
                charactersWithDes.description !== '' &&
                !charactersWithDes.thumbnail.path.includes('image_not_available') 
              )
            })

            setChosenCharacter(descriptionFilter)
          })
     
  }, []);


  return (
    <div className="App">
      <div className="body">
      <Title />
        {
          isLoading
          ? <Loading />
          :<Navigation 
          comicsArray = {comicsArray}
          heroArray = {chosenCharacter}
          />
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
