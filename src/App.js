import React from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'
import ViewStudent from './components/ViewStudent'


export const url = 'https://62e3aeb9b54fc209b88e51cb.mockapi.io/new'

export const Students= React.createContext();

function App() {
  let data = {
monthly : '40,000' ,
annual : '4,80,000',
task : '10',
pending : '18'
}
  return <>
  <div className='main-wrapper'> 
<BrowserRouter>
<Sidebar/>
<Students.Provider value ={{data}}>
<Routes>
  <Route path="Dashboard" element={<Dashboard  data={data}/>}/>
  <Route path="create-student" element={<CreateStudent/>}/>
  <Route path="edit-student/:id" element={<EditStudent/>}/>
  <Route path="view-student" element={<ViewStudent/>}/>
  <Route path="*" element={<Dashboard data={data}/>}/>
</Routes>
</Students.Provider>
</BrowserRouter>
  
  </div>
  </>
} 
export default App