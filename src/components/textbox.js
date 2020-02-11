import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './textbox.css';


const TextBox = () => {
    const [font, setFont] = useState("pacifico");
    const [text, setText] = useState("");
    
    const updateText = () => {
        let text = document.getElementById("userInput").value
        setText(text);
    }
    function print() {
        const filename  = 'yourmantra.pdf';
		html2canvas(document.querySelector("#nodeToRenderAsPDF"), { width: "600", height: "2000" }).then(canvas => {
            console.log("in the canvas rendering function")
            // document.body.appendChild(canvas);
			let pdf = new jsPDF('p', 'in', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 1, -5, 8, 17);
			pdf.save(filename);
		});
	}
    return (
    <div className="container">
        <div>
            <p>Write your love note: </p>
            <textarea 
                id="userInput"
                placeholder="Our family is..."
                style={{
                    fontFamily: `${font}`,
                }}
                onChange={() => updateText()}
            >
            </textarea>
            <p>Preview: </p>
            <div id="nodeToRenderAsPDF">   
                <p
                    style={{
                        fontFamily: `${font}`,
                        textAlign: `center`,
                    }}
                >
                    {text}
                </p>
            </div>
            <button onClick={() => print()}>Save as PDF!</button>
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