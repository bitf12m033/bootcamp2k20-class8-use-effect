import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  
  let data = {title:"Waiting ..."};

  const [todo, setTodo] = useState(data);
  const [isData, setIsData] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    
    async function fetchData()
    {
      setIsFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data2 = await response.json()
      setTodo(data2); 
      setIsFetching(false); 
    }
    fetchData();
  }, [isData]);

  if(isFetching){
    return <div>Data Loading.....</div>
  }
  return (
    <div>
  Hello Fetch
  <span>Title: {todo.title}</span>
</div>

  );
}

export default App;
