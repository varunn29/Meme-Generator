import { useState } from "react"
import { Link } from "react-router-dom"

function Home(props)
{
    return (
        <div>
            <Link to="/template"><button type="button" className="bg-violet-600 hover:bg-violet-700 text-white text-2xl my-5 mx-10 p-4 rounded active:scale-95">Select from given Templates</button></Link>
        </div>
    )
}

export default Home