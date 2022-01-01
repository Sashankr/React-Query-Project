import logo from './logo.svg';
import './App.css';

import {useState} from  'react';
import {useQuery} from 'react-query';
import CondtionalQuery from './CondtionalQuery';
import GitHubRepoInfo from './GitHubRepoInfo';

const Button = () => {
  const {data,error} = useQuery('hello-world',()=>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.random())
      }, 1000);
    })
  })

  return <button>A simple button {data}</button>

}

function App() {

  const [visible,setVisible] =  useState(false)
  

  return (
    <div className="App">
      <header className="App-header">

        {visible && <Button /> }
        <button onClick={()=>{setVisible(visible=> !visible)}}>Toggle Button</button>
        <CondtionalQuery/>

        <GitHubRepoInfo />
      </header>
    </div>
  );
}

export default App;
