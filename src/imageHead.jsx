 import bigLight from './assets/bg-desktop-light.jpg'
 import bigSun from './assets/icon-sun.svg'
 import bigmoon from './assets/icon-moon.svg'
import './assets/style.css';
import {Image, Container,Row, Button,Alert, Breadcrumb,Card, Col} from 'react-bootstrap'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import 'bootstrap/dist/css/bootstrap.min.css'


const ImageHead = () => {
    return ( 
        <div>
            
            
            <Container>
         
               <Row className='text-center mt-5'>
                <Col md={6}><h1>TODO</h1></Col>
                <Col md={6}> <Image src={bigmoon}/></Col>
                
               </Row>
                     
                     <Row>
                        <Col>
                        <InputGroup className="mb-3 ">
        <InputGroup.Checkbox  aria-label="Checkbox for following text input" />
        <Form.Control className='w-25' aria-label="Text input with checkbox" />
      </InputGroup>
                        </Col>
                     </Row>

            </Container>

            
        </div>
     );
}
 
export default ImageHead;