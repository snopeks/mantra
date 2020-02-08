import React from 'react';
import './textbox.css';


const changeFont = (font) => (
    console.log(`clicking ${font}`)        
)


const TextBox = () => (
    <div className="container">
        <div>
            <p>Write your values out: </p>
            <textarea 
                style={{
                    border: `5px dashed black`,
                    textAlign: `center`, 
                    fontSize: `2rem`,
                    fontFamily: `pacifico`,
                    height: `1000px`,
                    width: `100%`,
                    padding:`150px 50px`,

                }}
                placeholder="Start writing!"
            
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
                onClick={() => changeFont("pacifico")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Lemonada`,
                }}
                onClick={() => changeFont("Lemonada")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Montserrat`,
                }}
                onClick={() => changeFont("Montserrat")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Lobster`,
                }}
                onClick={() => changeFont("Lobster")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Abril Fatface`,
                }}
                onClick={() => changeFont("Abril Fatface")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Exo 2`,
                }}
                onClick={() => changeFont("Exo 2")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Raleway`,
                }}
                onClick={() => changeFont("Raleway")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Rajdhani`,
                }}
                onClick={() => changeFont("Rajdhani")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Permanent Marker`,
                }}
                onClick={() => changeFont("Permanent Marker")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Alfa Slab One`,
                }}
                onClick={() => changeFont("Alfa Slab One")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Archivo Black`,
                }}
                onClick={() => changeFont("Archivo Black")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Playfair Display SC`,
                }}
                onClick={() => changeFont("Playfair Display SC")}
            >
                Aa
            </button>
        </div>
    </div>
)

export default TextBox; 