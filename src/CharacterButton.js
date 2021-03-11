// CharacterButton.js

const CharacterButton = ({chosenHeroes}) => {
     console.log(chosenHeroes.name)

     return(
          <main>
               {
               chosenHeroes.thumbnail === undefined
               ? null
               :
               <>
                    <div className = "heroContainer">
                         <img src = {chosenHeroes.thumbnail.path + '.jpg'} alt=""/>
                         <div className = "heroInfo">
                              <h3>{chosenHeroes.name}</h3>
                              <p>{chosenHeroes.description}</p>
                         </div>
                    </div>
               </>

          }
          </main>
          
     )
}

export default CharacterButton;