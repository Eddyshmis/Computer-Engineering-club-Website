import { Card, Container } from 'react-bootstrap'
import NavigationBar from '../../components/NavigationBar'
import Sidebar from '../../components/Sidebar/sidebar'
import "./WebDev.css"

const WebDev = () => {
  return (
  <>
    <NavigationBar/>
    <Sidebar/>
    
    <Card className='text-bg-dark shadow container-fluid'>
      <Card.Title>
        Welcome to Website Development
      </Card.Title>
    </Card>
  </>
  )
}

export default WebDev