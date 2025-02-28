import { useState } from 'react'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from "./components/Card"
import { CreateContentModel } from './components/CreateContentModel'




function App() {
  const [modealOpen, setModalOpen] = useState(false);


  return <div className='p-4'>
    <CreateContentModel open={modealOpen} onClose={() => {
      setModalOpen(false);
    }}/>
      <div className='flex justify-end gap-4'>
        <Button varient='primary' text='Add content' startIcon={<PlusIcon />}></Button>
        <Button varient='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button>
      </div>
      <div className='flex gap=2'>
          <Card type='twitter' link='https://x.com/mohfazam/status/1889201894897422497' title='First HackAthon Win' />
          <Card type='youtube' link='https://www.youtube.com/watch?v=PxJNNAezY0A' title='Calling U' />
        </div>
    </div>
  
}

export default App
