import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from "../components/Card"
import { CreateContentModel } from '../components/CreateContentModel'
import { Sidebar } from "../components/Sidebar"
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { FRONTEND_URL } from '../config'




export function Dashboard() {
  const [modealOpen, setModalOpen] = useState(false);

  const {contents, refresh} = useContent();

  useEffect(() =>{
    refresh();
  }, [modealOpen]);


  return <div>
    {/* SideBar  */}

    <Sidebar />


    {/* Main Content */}
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-12'>
      <CreateContentModel open={modealOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className='flex justify-end gap-4'>
        <Button onClick={() => {
          setModalOpen(true);
        }} varient='primary' text='Add content' startIcon={<PlusIcon />}></Button>
        <Button varient='secondary' text='Share Brain' startIcon={<ShareIcon />}
        onClick={async () => {
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
          }, { 
            headers: {
              "Authorization" : localStorage.getItem("token")
            }
          }); 
          const shareUrl = `${FRONTEND_URL}/share/${response.data.hash}`
          alert(shareUrl)
        }}
        ></Button>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {contents.map(({ type, link, title }:any) => (
          <Card key={link} type={type} link={link} title={title} />
        ))}


        {/* <Card type='youtube' link='https://www.youtube.com/watch?v=PxJNNAezY0A' title='Calling U' /> */}
      </div>
    </div>
  </div>

}


