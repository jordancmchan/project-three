//SearchResult.js
import { useState , useEffect} from 'react';
import axios from 'axios';

const SearchResult = ({userInput}) => {
     const [searchResults , setSearchResults] = useState([])

     
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
                    console.log(resultsArr)
                    
                    const filteredArr = resultsArr.filter((results)=>{
                         return(
                              !results.thumbnail.path.includes('image_not_available') 
                         )
                    })
                    
                    setSearchResults(filteredArr)
                    })
     },[userInput])

     return(
          <div className="overallResultsContainer">
               <h1>Results</h1>
               {searchResults.map((result , index) => {
                    return(
                         <div className="resultContainer">
                              <p>{result.name}</p>
                              <img src={result.thumbnail.path + '.jpg'} alt= {result.name}/>
                              <p>{result.description}</p>
                         </div>
                    )
               })

               }
          </div>
     )
}

export default SearchResult