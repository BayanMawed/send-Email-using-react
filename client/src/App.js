import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      message:'',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange = e =>{
    this.setState({[ e.target.name]: e.target.value})
  }
  async handleSubmit(e){
    e.preventDefault()
    const {name,email,message}=this.state
    const form =await axios.post('api/form',{
     name,
     email,
     message,
    })
    .then(
      console.log('setstate'),
      this.setState({
        name: '',
        email: '',
        message: ''
      })

    )
  }
  render() {
    return (
      <form  onSubmit={this.handleSubmit} style={{width:'600px'}}>
          <FormGroup >
            <Label for="name" >Company Name:</Label>
            <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          </FormGroup>
          <FormGroup >
            <Label for="email" >Email:</Label>
            <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
          </FormGroup>
          <FormGroup >
            <Label for="message" >Message:</Label>
            <Input type="textarea" name="message" onChange={this.handleChange} value={this.state.message} />
          </FormGroup>
          <button>Submit</button>
      </form>
    );
  }

}

export default App;
