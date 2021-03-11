//DisplayCreators.js

const DisplayCreators = ({creatorsArray}) =>{
     const slicedCreatorsArray = creatorsArray[0].creators.items.slice(0,5)
     
     return(
          <div>
               <h3>Creators</h3>
               {slicedCreatorsArray.map((creator , index)=>{
                    return(
                         <div className ="creatorContainer">
                              <p>{creator.name}:</p>
                              <p key = {index}>{creator.role}</p>
                         </div>
                    )
               })
     
               }
          </div>
     )
}

export default DisplayCreators; 