import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';
require('../styles/board.scss');

const Event = props => (
    <tr>
        <td>{props.event.product_name}</td>
        <td>{props.event.quantity}</td>
        <td>{props.event.date_entered}</td>
        <td>{props.event.event_start}</td>
        <td>{props.event.event_end}</td>
        <td>{props.event.location}</td>
        <td>{props.event.contact_info}</td>
        <td>{props.event.description}</td>
        <td>
            <Link to={"/edit/"+props.event._id}>edit</Link> | <a href="#" onClick={() => { props.deleteEvent(props.event._id) }}>delete</a>
        </td>

    </tr>
)

export default class Board extends Component {
    
    constructor(props) {
        super(props);

        this.deleteEvent = this.deleteEvent.bind(this);
        
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        axios.get('https://secondhelpings.herokuapp.com/event/')
            .then(res => {
                this.setState({
                    events: res.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteEvent(id) {
        axios.delete('https://secondhelpings.herokuapp.com/event/'+id)
            .then(response => {console.log(response.data)});
        
        this.setState({
            events: this.state.events.filter(el => el._id !== id)
        })
    }

    eventList() {
        for(var i = 0; i < this.state.events.length; i++)
        {
            console.log(this.state.events[i].date_entered);
        }

        this.state.events.map(currentevent => {
            //format date_entered
            var mbDate = moment(currentevent.date_entered);
            var newDate = mbDate.format('dddd, MMMM Do YYYY');
            var newTime = mbDate.format('hh:mm a');
            currentevent.date_entered = newDate+'\n'+newTime;

            //format event_start
            mbDate = moment(currentevent.event_start);
            newDate = mbDate.format('dddd, MMMM Do YYYY');
            newTime = mbDate.format('hh:mm a');
            currentevent.event_start = newDate+'\n'+newTime;

            //format event_end
            mbDate = moment(currentevent.event_end);
            newDate = mbDate.format('dddd, MMMM Do YYYY');
            newTime = mbDate.format('hh:mm a');
            currentevent.event_end = newDate+'\n'+newTime;
        });

        return this.state.events.map(currentevent => {
            return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
        });
    }

    render() {
        return (
            <div className="board-component">
                <div className="page">
                    <Container fluid>
                        <Row className="board-title">
                            <Col xs={12} sm={2}/>
                            <Col xs={12} sm={8}>
                                <h3>Board</h3>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Button href="/add" variant="dark">Add Event</Button>
                            </Col>
                        </Row>
                        <Table striped bordered responsive hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Date Entered</th>
                                    <th>Event Start</th>
                                    <th>Event End</th>
                                    <th>Location</th>
                                    <th>Contact Information</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.eventList() }
                            </tbody>
                        </Table>
                    </Container>    
                </div>
            </div>
        )
    }
}