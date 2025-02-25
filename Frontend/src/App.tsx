
import {Button} from './components/Button'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from "./components/Card"
import './App.css'



function App() {


  return (
    <div className='2-full h-[900px] flex justify-center items-center gap-6'>
      <Button varient='primary' text='Add content' startIcon={<PlusIcon />}></Button>
      <Button varient='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button>
      <Card />
    </div>
  )
}

export default App
