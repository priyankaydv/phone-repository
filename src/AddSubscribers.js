import React,{Component} from 'react';
import Header from './Header';
import './AddSubscribers.css'
import {Link} from 'react-router-dom';
class AddSubscribers extends Component{
    constructor(){
        super();
       this.state={
           id:0,
           name:'',
           phone:''
       }
       console.log(this.state);
    }
    inputChangedHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0 ,name: '',phone: ''});
        this.props.history.push("/");
    }
    render(){
        const{name,phone}=this.state;
        return(
            <div className="component-container">
                <Header heading="Add Contacts"/>
                <div className="component-body-container">
                   <Link to="/"> <button className="custom-btn back-btn">Back</button></Link>
                    <form className="contact-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name</label>
                        <br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone No.</label><br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/><br/><br/>
                        <div className="contact-info-container">
                            <span className="contact-to-add-heading">Contacts to be added</span><br/>
                            <span className="contact-info">Name:{name}</span><br/>
                            <span className="contact-info">Phone:{phone}</span><br/>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>

                    </form>
                </div>
                <div>
                <div></div>
                </div>
            </div>
        )
    }
}
export default AddSubscribers;