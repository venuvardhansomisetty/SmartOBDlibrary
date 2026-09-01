import React from 'react';
import {BrowserRouter,link,Route,Routes} from 'react-router-dom';
import axios from 'axios';
function homepage(props) {
  return (
    <div>
        <nav style={{backgroundColor: '#154572', padding: '10px',}}><br/>
        <h1 align="center" style={{ color: 'white' }}><b>🎉Welcome to Smart OBD Library Scanner🎉</b></h1>
      </nav><br/>
      <section align='center'>
        <h2>Select Your user type </h2>
        <p>And login!</p>
      </section><br/>
      <div style={{ 
        maxWidth: '500px',
        margin: '0 auto',
        padding: '75px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0'
      }}>
        <form align='center'>
          <button style={{
            padding: '12px 30px',
            marginRight: '10px',
            backgroundColor: '#154572',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Mechanic
          </button>
          <button style={{
            padding: '12px 30px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Customer
          </button>
        </form>
      </div><br/><br/>
      <i align='center'><h5>
      SELECT THE RIGHT BUTTON 
      </h5></i>
    <p align='center'><u>
      If you are mechanic click the mechanic button </u>
      <br/>
      <u>If u are customer click the customer button to countinue
      </u></p>
      
    
    </div>
    
  );
}

export default homepage;