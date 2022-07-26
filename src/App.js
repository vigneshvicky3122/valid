import React from 'react'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  let data = {
monthly : '40,000' ,
annual : '4,80,000',
task : '10',
pending : '18'

}
  return <>
  <div className='main-wrapper'> 
  <Sidebar/>
  <Dashboard  data={data}/>
  
  </div>
  
  
  </>
} 
export default App