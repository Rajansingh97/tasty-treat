import React, { Component } from 'react';
import Footer from './Footer';
import Header from "./Header";
import NavBar from './NavBar';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  

  handleSubmit(event) {
    console.log('A feedback was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
    
  }
  handleSubmit(event) {
    event.preventDefault();
  
    // Validate form inputs
    if (!this.state.name) {
      alert('Please enter your name.');
      return;
    }
  
    if (!this.state.email) {
      alert('Please enter your email address.');
      return;
    }
  
    if (!this.state.message) {
      alert('Please enter a message.');
      return;
    }
  
    // Submit feedback
    console.log('A feedback was submitted: ' + JSON.stringify(this.state));
  }
  

  render() {
    return (
       
        <body>
             <Header/>
             <NavBar/>

        
     
        
      <div  style={{ width: '30%' }} >
        


        <h1 className="form-title">Feedback Form</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label className="form-label">
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-input" />
       
          </label>
          <br />
          <label className="form-label">
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-input" />
          </label>
          <br />
          <label className="form-label">
            Message:
            <textarea name="message" value={this.state.message} onChange={this.handleChange} className="form-textarea" />
          </label>
          <br />

          
          <input type="submit" value="Submit" className="form-button" />
        </form>
        
      </div>
      <Footer/>
      </body>
      
    );
  }
}

export default FeedbackForm;
