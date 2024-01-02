import './App.css'
import Header from './Header'
import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('')

  useEffect(() => {
    // Update Current Time 
    const intervalId = setInterval(()=>{
      setCurrentTime(new Date());
    }, 1000);

    // Cleaning Up of interval on component unmounting
    return () => clearInterval(intervalId);
  }, []);

  const formatedTime = currentTime.toLocaleString()
  return (
    <>
      <div style={{height: '95vh'}}>
        <Header />
        <div className='toDo'>
          <div>
            <div className="card">
              <div>
                <h4>To-Do List</h4>
                <span>{formatedTime}</span>
              </div>
              <div className='todoDiv' style={{ alignItems:'flex-end', paddingBlock: '20px 25px' }}>
                <input value={toDo} onChange={(e)=>{setToDo(e.target.value)}} className='toDoInput' type="text" />
                <div style={{padding: '10px 15px', background: 'linear-gradient(0deg, rgb(22 56 87) 0%, rgba(11,91,154,0) 55%)'}}>
                  <i onClick={()=>{setToDos(toDos =>[...toDos, {text: toDo, status: false, id: Date.now()}], console.log(toDos))}} className="fa-solid fa-calendar-plus todoBtn"></i>
                </div>
              </div>
            </div>
            {
              toDos.map((object) =>{
                return (
                  <div className="todoList">
                    <input type="checkbox" value={object.status} name="status" id="status" />
                    <p>{object.text}</p>
                    <i className="fa-regular fa-circle-xmark fa-lg"></i>
                  </div>
                )
              })
            }
          </div>
          <div>
            <h1>New Area</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
