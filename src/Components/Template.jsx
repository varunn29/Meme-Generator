import { useState } from "react"
import { Link } from "react-router-dom";

function Template(props)
{   
    return (
        <div>
            <div className="flex flex-wrap gap-15 my-5 justify-center">
                {
                    props.data.map(function(element){
                 return (
                    <div className="w-60 h-70 rounded">
                        <Link to="/caption">
                           <img onClick={function(){
                               props.setSelectedTemplate(element.image)
                            }} className="w-full h-full object-fill rounded cursor-pointer" src={element.image}/>
                        </Link>
                    </div>
                 )
               })
                }
            </div>
        </div>
    )
}

export default Template