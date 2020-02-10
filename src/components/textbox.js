import React, { useState } from 'react';
import './textbox.css';


const TextBox = () => {
    const [font, setFont] = useState("pacifico");
    return (
    <div className="container">
        <div>
            <p>Write your values out: </p>
            <textarea 
                placeholder="Start writing!"
                style={{
                    fontFamily: `${font}`,
                }}
            >
            </textarea>
            <button
                style={{
                    margin: `0 auto`,
                }}
            >Save as PDF!</button>
        </div>   
        <div>
            <p>Select your font: </p>
            <button
                style={{
                    fontFamily: `Pacifico`,
                }}
                onClick={() => setFont("pacifico")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Lemonada`,
                }}
                onClick={() => setFont("Lemonada")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Montserrat`,
                }}
                onClick={() => setFont("Montserrat")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Lobster`,
                }}
                onClick={() => setFont("Lobster")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Abril Fatface`,
                }}
                onClick={() => setFont("Abril Fatface")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Exo 2`,
                }}
                onClick={() => setFont("Exo 2")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Raleway`,
                }}
                onClick={() => setFont("Raleway")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Rajdhani`,
                }}
                onClick={() => setFont("Rajdhani")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Permanent Marker`,
                }}
                onClick={() => setFont("Permanent Marker")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Alfa Slab One`,
                }}
                onClick={() => setFont("Alfa Slab One")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Archivo Black`,
                }}
                onClick={() => setFont("Archivo Black")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Playfair Display SC`,
                }}
                onClick={() => setFont("Playfair Display SC")}
            >
                Aa
            </button>
        </div>
    </div>


    )
}

export default TextBox; 