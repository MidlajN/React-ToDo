import './App.css'
import Header from './Header'
import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

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
          <div className="card">
            <div>
              <h4>To-Do List</h4>
              <span>{formatedTime}</span>
            </div>
            <div className='todoDiv' style={{ alignItems:'flex-end', paddingBlock: '20px 25px' }}>
              <input className='toDoInput' type="text" />
              <div style={{padding: '10px 15px'}}>
                <i class="fa-solid fa-calendar-plus "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
