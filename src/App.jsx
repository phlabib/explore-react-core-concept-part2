import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './users';
import Friends from './Friends';

function App() {
  function handleClick ()  {
    alert ('button clicked');
  }
  const handleClicked2 = () => {
    alert ('Button 2 Clicked')
  }
  const handleclicked3 = () => {
    alert ('alert button clicked')
  }
  const buttonClicked = () => {
    alert ('buttoon 4 clicled')
  }
  

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team> </Team>
      <Counter> </Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClicked2}>Click 2</button>
      <button onClick={handleclicked3}>alart button</button>
      <button onClick={buttonClicked}>button 4</button>
      <button onClick={() => {alert('5th clicked')}}>5th</button>
    </>
  )
}

export default App
