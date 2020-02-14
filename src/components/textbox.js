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
    function print(quality = 2) {
        const filename  = 'yourmantra.pdf';
		html2canvas(document.querySelector("#nodeToRenderAsPDF"), { scale: quality, width: "700", height: "1450" }).then(canvas => {
            // document.body.appendChild(canvas);
            console.log(window.innerWidth)
			let pdf = new jsPDF('p', 'in', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 1, -3, 8, 17);
			pdf.save(filename);
		});
	}
    return (
    <div className="container">
        <div>
            <p>Write your love note: </p>
            <textarea 
                id="userInput"
                placeholder="I love you because..."
                onChange={() => updateText()}
            >
            </textarea>
            <p>Preview: </p>
            <div id="nodeToRenderAsPDF"
                style={{
                    fontFamily: `${font}`,
                    textAlign: `center`,
                }}
            >   
                {text}  
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
                    fontFamily: `Yesteryear`,
                }}
                onClick={() => setFont("Yesteryear")}
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
                    fontFamily: `Megrim`,
                }}
                onClick={() => setFont("Megrim")}
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
                    fontFamily: `Damion`,
                }}
                onClick={() => setFont("Damion")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Limelight`,
                }}
                onClick={() => setFont("Limelight")}
            >
                Aa
            </button>
            <button
                style={{
                    fontFamily: `Vast Shadow`,
                }}
                onClick={() => setFont("Vast Shadow")}
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
                    fontFamily: `Monoton`,
                }}
                onClick={() => setFont("Monoton")}
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