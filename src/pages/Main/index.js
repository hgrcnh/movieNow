import React, {Component} from 'react';
import {Container, Card, Row, Col, Button} from 'react-bootstrap'

class Main extends Component {
    //state = {  }
    render() {
        return (
            <>
                <Container
                    style={{
                        paddingTop:50,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: 300,
                    }}
                
                >
                    <h1 style={{color: '#fff', fontFamily:'ubuntu', marginTop:20} }>Movie Now</h1>
                   <Row style={{display:'flex', justifyContent:'center'}}>
                    <Card style={{ width:250, margin:10 }}>
                        <Card.Img variant="top" 
                        style={{width:180, height: 300, alignSelf: 'center', paddingTop: 20, cursor: 'pointer' }}
                        src="https://i.pinimg.com/736x/72/83/92/728392b482329cfef27833fe110321b8--netflix-series-on-netflix.jpg" />
                        <Card.Body style={{
                            display:'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text style={{
                                fontSize: 12
                            }}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-dark" style={{
                                width:"100%"
                            }}>Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Row>
                </Container>    
            </>
        );
    }
}

export default Main;