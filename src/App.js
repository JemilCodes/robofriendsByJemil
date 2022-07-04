import React from "react";
import CardList from "./CardList";
import 'tachyons'
// import { robots } from "./robot";
import "./App.css";
import SearchBox from "./SearchBox";
import Scroll from './Scroll';

function App() {
  const [robots , setRobots] = React.useState([]);
  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data)=>data.json()).then((users)=>{
      setRobots(users)
    })
  },[])
  const [searchfield, setSearchfield] = React.useState("");

  const searchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robots.length === 0) {
   return <h1>Loading....</h1>
  }else {
    return (
    <div className="tc">
      <h1 className="f1 title">Robofriends by Jemil</h1>
      <SearchBox searchfield={searchfield} searchChange={searchChange} />
      <Scroll> 
      <CardList robots={filteredRobots} /> 
      {filteredRobots.length < 1 && <h1 className="f1 title">no robot name includes "{searchfield}"</h1>}
      </Scroll>
    </div>
  );
  }
  
}

export default App;
