import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InquirySelector from './components/InquirySelector';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [inquiry, setInquiry] = React.useState('general');
  const [title, setTitle] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function onSubmit(e: any) {

    // send a post request to api using axios
    const response = await axios.post(
      'http://localhost:3000/conversations',
      {
        name,
        email,
        inquiry,
        title,
        message,
      },
      {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
    );

    console.log(response.data);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Contact Us | <span className='App-link'>AVS Support Center</span>
        </p>
      </header>
      <section style={{marginLeft: '70px', marginRight: '70px', marginTop: '70px'}}>
        <p>
          Welcome to the AVS Support Center. We are here to help you with any questions you may have. Please complete
          the form below to reach an Amazon Web Services sales representative.
        </p>
        {/* Please complete the form below to reach an Amazon Web Services sales representative. */}

        <div className='container'>
          <form style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
            {/* <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required /> */}
            <TextField
              required
              id='outlined-required'
              label='Name'
              defaultValue=''
              style={{marginBottom: '10px'}}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id='outlined-required'
              label='Email'
              type='email'
              defaultValue=''
              style={{marginBottom: '10px'}}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InquirySelector onChange={setInquiry} />
            <TextField
              required
              id='outlined-required'
              label='Title'
              type='text'
              defaultValue=''
              style={{marginTop: '20px', marginBottom: '10px'}}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='message' style={{marginTop: '10px'}}>
              Tell us about your problem*:
            </label>
            <textarea
              style={{marginTop: '10px', marginBottom: '10px'}}
              id='message'
              rows={6}
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              required></textarea>
            <Button type='submit' variant='contained' onClick={onSubmit}>
              Send
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
