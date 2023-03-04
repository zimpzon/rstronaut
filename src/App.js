import './App.css';
import Question from './Components/Question';

function App() {
  return (
    <div className="App">
      <h1>r-stronauten</h1>

      {/* // Main page has a single question and a help option button.
      // Shows the correct answer after the user has answered.
      // Then there is a 'start quiz' button */}
      
      <div></div>
      <h3>Hvilken sætning er korrekt?</h3>
      <Question optionA='Køre du bil?' optionB='Kører du bil?'/>
      <div></div>
      <div>Prøv at sætte et ord som 'svømme', 'spise', eller 'løbe' ind i stedet, så er det pludselig let at se hvad det korrekte svar er:</div>
      <div></div>

      {/* Toggles, with only one option being true at a time */}
      <button>svømme</button>
      <button>spise</button>
      <button>løbe</button>

      <div></div>
      <div>Når du føler dig klar, kan du starte quizzen her, og få dit r-stronaut certifikat!</div>
      {/* Share on social media */}
      <button>Start Quiz</button>
    </div>
  );
}

export default App;
