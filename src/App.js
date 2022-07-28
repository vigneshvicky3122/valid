import React from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'
import ViewStudent from './components/ViewStudent'
import {useState} from 'react'

function App() {
  let data = {
monthly : '40,000' ,
annual : '4,80,000',
task : '10',
pending : '18'
}
let [student , setStudent]= useState ([
  {
name : "Vignesh A",
email : "vigneshvicky3122@gmail.com",
mobile : '8304873122',
batch : 'B36TWD',

  },
  {
    name : "murugan",
    email : "murugan@gmail.com",
    mobile : '899241922',
    batch : 'btch5d2',
    
      },
    {
    name : "gogul",
    email : "gogul@gmail.com",
    mobile : '04924022',
    batch : 'btchx12',
        
    },

])

  return <>
  <div className='main-wrapper'> 
<BrowserRouter>
<Sidebar/>
<Routes>
  <Route path="Dashboard" element={<Dashboard  data={data}/>}/>
  <Route path="create-student" element={<CreateStudent create={{student,setStudent}}/>}/>
  <Route path="edit-student/:id" element={<EditStudent editStudent={{student,setStudent}}/>}/>
  <Route path="view-student" element={<ViewStudent studentView={{student,setStudent}}/>}/>
  <Route path="*" element={<Dashboard data={data}/>}/>
</Routes>
</BrowserRouter>
  
  </div>
  </>
} 
export default App