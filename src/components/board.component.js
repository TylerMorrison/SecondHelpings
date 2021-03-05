import React, { Component } from 'react';
// import { Button, View } from 'react-native';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        return this.state.events.map(currentevent => {
            return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
        });
    }

    render() {
        return (
            <div>
                <h3>Board</h3> 
                {/* <View style={{ flexDirection: 'row' }}>
                    <View style={styles.button_1}>
                        <Button
                        title="Yes"
                        onPress={() => {
                            console.log('clicked');
                        }}
                    />
                    </View>
                    <View style={styles.button_1}>
                        <Button
                        title="No"
                        onPress={() => {
                            console.log('clicked');
                        }}
                        />
                    </View>
                </View> */}
                <table className = "table">
                    <thead className = "thead-light">
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
                </table>
            </div>
        )
    }
}