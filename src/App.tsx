import './App.css'
import { Text, Button, Header } from './ui'

function App() {

  const handleClick = () => {
    alert("Hola!");
  };

  return (
    <>
      <Header>Szkoła React 2.0</Header>
      <Text>Hello!</Text>  
      <div><Button 
        onClick={handleClick}
        label="Click me!"
        className="text-blue-700 bg-blue-100 border-blue-200 hover:border-blue-200"
      /></div>
      <div><Button 
        onClick={handleClick}
        label="Click me!"
        className="text-green-700 bg-green-100 border-green-200 hover:border-green-200"
      /></div>
      <div><Button 
        onClick={handleClick}
        label="Click me!"
        className="text-red-700 bg-red-100 border-red-200 hover:border-red-200"
      /></div>
    </> 
  );
}

export default App
