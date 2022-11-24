import Child from './Child';
import './App.css'

function App() {

  const appStyling = {
    fontSize: "40px",
    textAlign: "center",
    margin: "40px",
    border: "1px solid purple",
  }

  const styledText = {
    fontSize: "30px",
    textAlign: "center",
    margin: "40px",
    border: "1px solid orange",
    color: "red"
  }

  return (
    <div style={appStyling}>
      <h1>Application</h1>
      <div style={styledText}>
        <Child />
      </div>
    </div>
  );
}

export default App;
