import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios"

import ContainerList from './components/ContainerList';

function App() {
  const [query, setQuery] = useState("")
  const [userArray, setUserArray] = useState([])
  const [firstName, setFirstName] = useState("")

  const sortArray = () => {
    userArray.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      } else if (a.name.first > b.name.first) {
        return 1;
      } else {
        return 0;
      }
    })
    setUserArray([...userArray])
  }

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=50&nat=us')
      .then(res => {
        console.log(res.data)
        setUserArray(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const filterArray = userArray.filter(person => person.name.first.includes(firstName) || person.name.last.includes(firstName))
  return (
    <div className="App">
      <button id='sort' type="button" onClick={sortArray} >
        Sort First Name
      </button>
      <input type="text" name="search" onChange={e => setFirstName(e.target.value)} />
      <ContainerList userArray={filterArray} />
    </div>
  );
}

export default App;


