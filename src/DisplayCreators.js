//DisplayCreators.js

const DisplayCreators = ({creatorsArray}) =>{
     console.log(creatorsArray)
     const slicedCreatorsArray = creatorsArray[0].creators.items.slice(0,5)
     
     return(
          <div class="creatorsContainer">
               {slicedCreatorsArray.map((creator , index)=>{
                    return(
                         <div className ="creatorContainer">
                              <p>{creator.name} - </p>
                              <p class="creatorRole"key = {index}>{creator.role}</p>
                         </div>
                    )
               })
     
               }
          </div>
     )
}

export default DisplayCreators; 