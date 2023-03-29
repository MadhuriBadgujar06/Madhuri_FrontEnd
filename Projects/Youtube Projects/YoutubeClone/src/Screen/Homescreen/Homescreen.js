import React from 'react'
import CategoriesBar from '../../Components/CategoriesBar/CategoriesBar'
import {Col, Container,Row} from 'react-bootstrap'
import Video from '../../Components/Video/Video'
function Homescreen() {
  return (
    <div>
      <Container>
        <CategoriesBar/>
        <Row>
           {
            [...new Array(20)].map(()=>
            <Col lg={3} md={4}>
                <Video/>
            </Col>)
           }
        </Row>
      </Container>
    </div>
  )
}

export default Homescreen
