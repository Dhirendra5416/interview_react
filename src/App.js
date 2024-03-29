import './App.css';
import CountOccurrences from './components/CountDigit';
import RGBComponent from './components/SortRGB';
import ContainsAllCharacters from './components/StringMatch';

function App() {
  return (
  <div className="App">
  <div class="container">
  <div class="box">
  <h1> Count Occurrences </h1>
    <span>Solution 1</span>
    <CountOccurrences/>
  </div>
  <div class="box">
  <h1>RGB Sort Problem </h1>
    <span>Solution 3</span>
    <RGBComponent/>
  </div>
  <div class="box">
    <h1>String match Problem </h1>
    <span>Solution 4</span>
    <ContainsAllCharacters/>
  </div>
  
</div>
    </div>
  );
}

export default App;
