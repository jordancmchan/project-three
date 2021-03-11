//DisplayCharacterInfo.js
import DisplayCreators from './DisplayCreators.js'


const DisplayComicInfo = ({chosenComicArray}) =>{
//     chosenComicArray[0].creators.items
     
     return(
          <main>
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
          </main>
     )
}


export default DisplayComicInfo;