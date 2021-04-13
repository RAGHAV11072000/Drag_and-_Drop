import React from 'react'
import i1 from '../images/1.png'
import i2 from '../images/2.png'
import i3 from '../images/3.jpg'
import i4 from '../images/4.png'
import i5 from '../images/5.jpg'
import i6 from '../images/6.jpg'

const parent = {
    'display': 'flex',
    'flex-direction': 'row',
}

const maindiv = {
    'width': 'fit-content',
    'display' : 'flex',
    'flex-direction' : 'column',
    'padding': 2
}

const maindiv2 = {
    'width': 1500,
    'height': 'fit-content',
    'display' : 'flex',
    'flex-direction' : 'row',
    'flex-wrap': 'wrap',
    'padding': 2
}

const imagestl = {
    'height': 130,
    'width': 130,
    'margin': 2
}

const oneset = {
    'background-color': 'blue',
    'width': 400,
    'height': 400,
    'margin': 10
}

const allowDrop = (ev) => {
    ev.preventDefault()
}  

const drag = (ev) => {
    ev.dataTransfer.setData("text/html", ev.target.id)
}  

const drop = (ev) => {
    ev.preventDefault()
    var data = ev.dataTransfer.getData("text/html")
    ev.target.appendChild(document.getElementById(data))
}  

export default function ImageComp() {
    return(
        <div style={parent}>
            
            <div style={maindiv}>
            <img id="drag11" src = {i1} alt = "loading" draggable="true" onDragStart={drag} style={imagestl}/>
            <img id="drag12" src = {i2} alt = "loading" draggable="true" onDragStart={drag} style={imagestl}/>
            <img id="drag13" src = {i3} alt = "loading" draggable="true" onDragStart={drag} style={imagestl}/>
            <img id="drag14" src = {i4} alt = "loading" draggable="true" onDragStart={drag} style={imagestl}/>
            <img id="drag15" src = {i5} alt = "loading" draggable="true" onDragStart={drag} style={imagestl}/>
            <img id="drag16" src = {i6} alt = "loading" draggable="true" onDragStart={drag} style={imagestl}/>
        </div>
            
        <div style={maindiv2}>
                <div id="div11" onDrop = {drop} onDragOver = {allowDrop} style={oneset}></div>
                <div id="div12" onDrop = {drop} onDragOver = {allowDrop} style={oneset}></div>
                <div id="div13" onDrop = {drop} onDragOver = {allowDrop} style={oneset}></div>
                <div id="div14" onDrop = {drop} onDragOver = {allowDrop} style={oneset}></div>
                <div id="div15" onDrop = {drop} onDragOver = {allowDrop} style={oneset}></div>
                <div id="div16" onDrop = {drop} onDragOver = {allowDrop} style={oneset}></div>
        </div>
            
        </div>
    )
}