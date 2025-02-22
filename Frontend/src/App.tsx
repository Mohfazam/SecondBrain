
import {Button} from './components/ui/Button'
import {Plus} from './icons/PlusIcon'



function App() {


  return (
    <div className='2-full h-[900px] flex justify-center items-center gap-6'>
      <Button startIcon={<Plus size='sm' />} size="sm" variant='primary' text='Add Link'></Button>
      <Button startIcon={<Plus size='md' />} size="md" variant='secondary' text='Share Link'></Button>
      {/* <Button startIcon={<Plus size='lg' />} size="lg" variant='secondary' text='hyderabad'></Button> */}
    </div>
  )
}

export default App
