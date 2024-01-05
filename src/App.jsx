
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import FormTask from '../components/FormTask/FormTask';
import { ListTask } from '../components/ListTask';

function App() {

  const [inputData, setInputData] = useState([])

  return (
    <>
      <div className='container text-center'>
        <div className='row gap-5'>
          <FormTask setInputData={setInputData} />
          <ListTask inputData={inputData} />
        </div>
      </div>
    </>
  )
}

export default App
