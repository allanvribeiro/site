import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Music = (props) => {
    return (
        <Container>
            <h1>Musique</h1>
            <p>Mes compositions</p>
            <div className="clear" />
            <Row>
                <Col style={{marginLeft: "10px", marginRight: '10px'}}>
                    <h2>Promenade</h2>
                    <iframe src="https://onedrive.live.com/embed?cid=61C690AA1928D1D8&resid=61C690AA1928D1D8%21560439&authkey=AMo5p_TtzdQFT-E" width="320" height="180" frameborder="0"  ></iframe>
                </Col>
                
                <Col style={{marginLeft: "10px", marginRight: '10px'}}>
                    <h2>Carroselando</h2>
                    <iframe src="https://onedrive.live.com/embed?cid=61C690AA1928D1D8&resid=61C690AA1928D1D8%21560440&authkey=AMI1B3Ys5Pb6dho" width="320" height="180" frameborder="0" ></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Music;