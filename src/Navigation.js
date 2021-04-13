// DisplayCharacters.js
import DisplayCreators from './DisplayCreators.js';
import SearchResult from './SearchResult.js'
import { useState } from 'react';


const DisplayComicList = ({comicsArray, heroArray}) => {

     const [chosenComicArray , setChosenComicArray] = useState([])
     const [character , setCharacter] = useState('')
     const [searchInput, setSearchInput]=useState('')

     const handleChange = (event) =>{

          const chosenComic = event.target.value

          let copyArray = [...comicsArray]

          const filteredArray = copyArray.filter((chosenHero)=>{
               return chosenHero.title === chosenComic
          })

          setChosenComicArray(filteredArray)
          setCharacter([])
          setSearchInput('')
     }

     const handleRandom = () => {
          const randomCharacter = heroArray[Math.floor(Math.random() * heroArray.length)]
          console.log(randomCharacter)
          setCharacter(randomCharacter)
          setChosenComicArray([])
          setSearchInput('')
     }

     const handleSearch = (e) => {
          e.preventDefault();
          const userInput = document.querySelector('#searchInput').value

          setSearchInput(userInput);
          setCharacter([])
          setChosenComicArray([])
          document.querySelector('#searchInput').value = '';     
     }


     return(
          <div> 
               <div className="navContainer">
                    <select value = {chosenComicArray.title} onClick = {handleChange}>
                         {comicsArray.map((comic)=>{
                              return(
                                   <option key = {comic.id} value = {comic.title}>{comic.title}</option>
                                   )})}
                    </select> 

                    <button onClick = {() => {handleRandom()}}>Spidy Button</button>

                    <form onSubmit ={handleSearch}>
                         <label htmlFor="">
                              <input type="text" placeholder = "Search for a Character" id="searchInput"/>
                              <input type="submit" value="Sumbit"/>
                         </label>
                    </form>    
               </div>


               <div className = "resultsContainer">
               {chosenComicArray.map((comic , index) => {
                    return(
                         <div className = "seriesInfoContainer ">
                              <img src= {comic.thumbnail.path + '.jpg'} key = {index} alt={comic.title}/>
                              <div className = "textContainer">
                                   <h2 key ={index}>{comic.title}</h2>
                                   <p key ={index}>{comic.description}</p>
                                   <DisplayCreators
                                   creatorsArray = {chosenComicArray} />
                              </div>
                         </div>
                    )
               })}

               {character.thumbnail === undefined 
               ?null 
               :
               <>
                    <div className = "heroContainer">
                         <img src = {character.thumbnail.path + '.jpg'} alt=""/>
                         <div className = "heroInfo">
                              <h3>{character.name}</h3>
                              <p>{character.description}</p>
                         </div>
                    </div>
               </>
               }
               
               {searchInput === ''
               ?null 
               :
               <SearchResult 
               userInput = {searchInput}
               />
               }


               </div>
          </div>
     )   
};

export default DisplayComicList; 



