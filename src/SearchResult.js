//SearchResult.js
import NoResultsPage from './NoResultsPage.js'
import Loading from './Loading.js'
import { useState , useEffect} from 'react';
import axios from 'axios';

const SearchResult = ({userInput}) => {
     const [searchResults , setSearchResults] = useState([]);
     const [noResults , setNoResults] = useState(false);
     const [isLoading , setIsLoading] = useState(true);

     const publicApiKey = "7dcc9e9b44bc9c6511df39ec67f8c47a";
     const baseUrl = "https://gateway.marvel.com";

     useEffect(() => {
          axios({
               method: 'GET',
               url : `${baseUrl}:443/v1/public/characters`,
               params: {
                    nameStartsWith: userInput,
                    limit: 100,
                    apikey: publicApiKey,
                    ts: 1,
                    hash:"22d5dd4d3d56b75599097ae231e28f79",
               },
               })
               .then((searchResponse)=>{
                    const resultsArr = searchResponse.data.data.results
                    
                    const filteredArr = resultsArr.filter((results)=>{
                         return(
                              results.description === '' &&
                              !results.thumbnail.path.includes('image_not_available')                    
                         )
                    })

                    if (filteredArr.length !== 0){
                         setSearchResults(filteredArr)
                         setIsLoading(false)
                         setNoResults(false)
                    }else{
                         setNoResults(true)

                    }
                    
               })
     },[userInput])

     return(
          <div className="overallResultsContainer">
               {isLoading
               ?<Loading />
               :null
               }
             {noResults === false
               ?searchResults.map((result) => {
                    return(
                         <div className="resultContainer">
                              <a href={result.urls[0].url}>
                              <img src={result.thumbnail.path + '.jpg'} alt= {result.name}/>
                              </a>
                              <h3>{result.name}</h3>
                         </div>
                    )
               })
               :<NoResultsPage />
             }  
          </div>
     )
}

export default SearchResult