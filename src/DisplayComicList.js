// DisplayCharacters.js
import DisplayComicInfo from './DisplayComicInfo.js'
import CharacterButton from './CharacterButton.js'
import { useState } from 'react';


const DisplayComicList = ({comicsArray, heroArray}) => {

     const [chosenComicArray , setChosenComicArray] = useState([])
     const[character , setCharacter] = useState('')

     const handleChange = (event) =>{

          const chosenComic = event.target.value

          let copyArray = [...comicsArray]

          const filteredArray = copyArray.filter((chosenHero)=>{
               return chosenHero.title === chosenComic
          })

          setChosenComicArray(filteredArray)
          setCharacter([])
     }

     const handleRandom = () => {

          const randomCharacter = heroArray[Math.floor(Math.random() * heroArray.length)]

          setCharacter(randomCharacter)
          setChosenComicArray([])
     }

     return(
          <div> 
               <div className="optionContainer">
                    <select value = {chosenComicArray.title} onClick = {handleChange}>
                         {comicsArray.map((comic)=>{
                              return(
                                   <option key = {comic.id} value = {comic.title}>{comic.title}</option>
                                   )})}
                    </select> 
                    <button onClick = {() => {handleRandom()}}>Spider Button</button>
                    <form action="">
                         <label htmlFor="">
                              <input type="text" placeholder = "Search for a Character" onChange ={handleChange}/>
                         </label>
               </form>    
               </div>

               <div className = "seriesContainer">
                    <CharacterButton
                    chosenHeroes = {character}/>

                    <DisplayComicInfo 
                    chosenComicArray = {chosenComicArray}
                    />                    
               </div>
          </div>
     )  
};

export default DisplayComicList; 



