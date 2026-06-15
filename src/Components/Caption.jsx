import { useState } from "react"

function Caption(props)
{
    const [input, setInput] = useState("");
    const [position, setPosition] = useState({x: 0, y: 0});
    const [locked, setLocked] = useState(false);
    const [captions, setCaptions] = useState([]);

    return (
        <div className="flex justify-between items-center">
            <div onMouseMove={function(e){
                if(locked)
                {
                    return;
                }
                
                const rect = e.currentTarget.getBoundingClientRect();

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                const minX = 0;
                const maxX = rect.width;
                const minY = 0;
                const maxY = rect.height;

                if(x < minX)
                {
                    x = minX;
                }

                if(x > maxX)
                {
                    x = maxX;
                }

                if(y < minY)
                {
                    y = minY;
                }

                if(y > maxY)
                {
                    y = maxY;
                }

                setPosition({x: x, y: y});

            }} onClick={function(){
                if(locked === true)
                {
                    setLocked(false);
                }
                if(locked === false)
                {
                    setLocked(true);
                }
            }} className="m-15 relative">

                {captions.map(function(caption){
                    return (
                                <p style={{
                                        left: caption.x,
                                        top: caption.y,
                                        transform: "translate(-50%, -50%)",
                                        textShadow: "1px 1px 2px white"
                                    }} className="text-black font-bold font-indie text-2xl absolute">
                                    {caption.text}
                                </p>
                            )
                })}

                <p style={{
                    left: position.x,
                    top: position.y,
                    transform: "translate(-50%, -50%)",
                    textShadow: "1px 1px 2px white"
                }} className="text-black font-bold font-indie text-2xl absolute">{input}</p>

                <img className="w-120 h-120" src={props.selectedTemplate}/>
            </div>

            <div>
                <img className="h-60 w-60" src="/Pepe Image.png"/>
            </div>

            <div className="w-120 h-120 border border-amber-50 m-15 p-5">
                <input onChange={function(e){
                    setInput(e.target.value);
                }} className="p-5 text-xl text-white bg-slate-700 border border-slate-500 w-full rounded" value={input} type="text" placeholder="Enter the text"/>

                <div className="flex justify-start gap-5 mt-5">
                    <button onClick={function(){
                    setCaptions([
                        ...captions,
                        {
                            text: input,
                            x: position.x,
                            y: position.y
                        }
                    ])

                    setInput("");
                    setPosition({x: 0, y: 0});
                    }} className="bg-green-600 text-white hover:bg-green-700 p-5 text-xl rounded block active:scale-95" type="button">Add Text</button>

                    <button onClick={function(){
                        setCaptions([]);
                        setInput("");
                        setPosition({x: 0, y: 0});
                    }} className="bg-red-600 text-white hover:bg-red-700 p-5 text-xl rounded block active:scale-95" type="button">Clear</button>
                </div>

                <div>
                    <p className="text-white font-bold mt-5"><span>Note:</span> The Clear button deletes all added captions and resets the editor.</p>
                </div>
            </div>
        </div>
    )
}

export default Caption