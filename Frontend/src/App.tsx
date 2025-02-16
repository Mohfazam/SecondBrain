
import {Button} from './components/ui/Button'
import {Plus} from './icons/PlusIcon'



function App() {


  return (
    <>
      <Button startIcon={<Plus size='sm' />} size="sm" variant='primary' text='hello'></Button>
      <Button startIcon={<Plus size='md' />} size="md" variant='secondary' text='World'></Button>
      <Button startIcon={<Plus size='lg' />} size="lg" variant='secondary' text='hyderabad'></Button>
    </>
  )
}

export default App
