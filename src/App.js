import ImageComp1 from './comps/image1'
import ImageComp2 from './comps/image2'
import ImageComp3 from './comps/image3'
import ImageComp4 from './comps/image4'
import ImageComp5 from './comps/image5'
import ImageComp6 from './comps/image6'
import './App.css';

const footer = {
  'display': 'flex',
  'flex-direction': 'row',
  'margin-left': 'auto',
  'margin-right': 'auto',
  'width': 'fit-content'
}

const buttonclass = {
  'margin': 10,
  'width': 100,
  'height': 100
}

const icstl = {
  'display': 'none'
}

const display1 = () => {
  document.getElementById('ic1').style.display = 'block'
  document.getElementById('ic2').style.display = 'none'
  document.getElementById('ic3').style.display = 'none'
  document.getElementById('ic4').style.display = 'none'
  document.getElementById('ic5').style.display = 'none'
  document.getElementById('ic6').style.display = 'none'
}

const display2 = () => {
  document.getElementById('ic1').style.display = 'none'
  document.getElementById('ic2').style.display = 'block'
  document.getElementById('ic3').style.display = 'none'
  document.getElementById('ic4').style.display = 'none'
  document.getElementById('ic5').style.display = 'none'
  document.getElementById('ic6').style.display = 'none'
}
const display3 = () => {
  document.getElementById('ic1').style.display = 'none'
  document.getElementById('ic2').style.display = 'none'
  document.getElementById('ic3').style.display = 'block'
  document.getElementById('ic4').style.display = 'none'
  document.getElementById('ic5').style.display = 'none'
  document.getElementById('ic6').style.display = 'none'
}
const display4 = () => {
  document.getElementById('ic1').style.display = 'none'
  document.getElementById('ic2').style.display = 'none'
  document.getElementById('ic3').style.display = 'none'
  document.getElementById('ic4').style.display = 'block'
  document.getElementById('ic5').style.display = 'none'
  document.getElementById('ic6').style.display = 'none'
}
const display5 = () => {
  document.getElementById('ic1').style.display = 'none'
  document.getElementById('ic2').style.display = 'none'
  document.getElementById('ic3').style.display = 'none'
  document.getElementById('ic4').style.display = 'none'
  document.getElementById('ic5').style.display = 'block'
  document.getElementById('ic6').style.display = 'none'
}
const display6 = () => {
  document.getElementById('ic1').style.display = 'none'
  document.getElementById('ic2').style.display = 'none'
  document.getElementById('ic3').style.display = 'none'
  document.getElementById('ic4').style.display = 'none'
  document.getElementById('ic5').style.display = 'none'
  document.getElementById('ic6').style.display = 'block'
}

export default function App() {
  return (
    <div className="App">
      <div>
        <div id='ic1' style={icstl}> <ImageComp1 /> </div>
        <div id="ic2" style={icstl}> <ImageComp2 /> </div>
        <div id="ic3" style={icstl}> <ImageComp3 /> </div>
        <div id="ic4" style={icstl}> <ImageComp4 /> </div>
        <div id="ic5" style={icstl}> <ImageComp5 /> </div>
        <div id="ic6" style={icstl}> <ImageComp6 /> </div>

        <div style={footer}>
          <button onClick={display1} style={buttonclass}> Page 1 </button>
          <button onClick={display2} style={buttonclass}> Page 2 </button>
          <button onClick={display3} style={buttonclass}> Page 3 </button>
          <button onClick={display4} style={buttonclass}> Page 4 </button>
          <button onClick={display5} style={buttonclass}> Page 5 </button>
          <button onClick={display6} style={buttonclass}> Page 6 </button>
        </div>
      </div>
      
    </div>
  );
}
