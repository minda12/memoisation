import React,{useState,useCallback,useMemo} from 'react';
import DemoList from './DemoList';

import './App.css';

function App() {

  const [listTitle,setlistTitle] = useState('My List')
  const [order,setorder] = useState('Ascending')

  const changeTitleHandler = useCallback(()=>{
    setlistTitle('New Title')
  
  },[])

  const changeOrderHandler = useCallback(()=>{
    // setorder('Ascending order')
    setorder(prevOrder => (prevOrder === 'descending' ? 'ascending' : 'descending'));
  
  },[])

  const sortedItems = useMemo(() => {
    return [5, 3, 1, 10, 9].sort((a, b) => (order === 'descending' ? a - b : b - a));
  }, [order]);

  return (
    <div className="app">
      <DemoList title={listTitle} items = {sortedItems}/>
      <button onClick={changeTitleHandler}>ChangeList Title</button>
      <button onClick={changeOrderHandler}>{order}</button>
    
    </div>
  );
}

export default App;
