import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddEvent extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDateEntered = this.onChangeDateEntered.bind(this);
        this.onChangeEventStart = this.onChangeEventStart.bind(this);
        this.onChangeEventEnd = this.onChangeEventEnd.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeContactInfo = this.onChangeContactInfo.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            quantity: 0,
            date_entered: new Date(),
            event_start: new Date(),
            event_end: new Date(),
            location: '',
            contact_info: '',
            description: ''
        }
    }

    onChangeProductName(e) {
        this.setState({
            product_name: e.target.value
        });
    }

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeDateEntered(date) {
        this.setState({
            date_entered: date
        });
    }

    onChangeEventStart(e) {
        this.setState({
            event_start: e
        });
    }

    onChangeEventEnd(e) {
        this.setState({
            event_end: e
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    onChangeContactInfo(e) {
        this.setState({
            contact_info: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const event = {
            product_name: this.state.product_name,
            quantity: this.state.quantity,
            date_entered: this.state.date_entered,
            event_start: this.state.event_start,
            event_end: this.state.event_end,
            location: this.state.location,
            contact_info: this.state.contact_info,
            description: this.state.description
        }

        console.log(event);

        axios.post('https://secondhelpings.herokuapp.com/event/add', event)
            .then(res => console.log(res.data));

        window.location = '/board';
    }

    render() {
        return (
            <div>
                <h3>Create New Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Product Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.product_name}
                            onChange={this.onChangeProductName}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Quantity: </label>
                        <input  type="text"
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity}
                            />
                    </div>
                    <div className="form-group">
                        <label>Start of Event: </label>
                        <div>
                            <DatePicker
                                selected={this.state.event_start}
                                onChange={this.onChangeEventStart}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>End of Event: </label>
                        <div>
                            <DatePicker
                                selected={this.state.event_end}
                                onChange={this.onChangeEventEnd}
                            />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <label>Location: </label>
                        <input  type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Contact Information: </label>
                        <input  type="text"
                            className="form-control"
                            value={this.state.contact_info}
                            onChange={this.onChangeContactInfo}
                            />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Add Event" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}