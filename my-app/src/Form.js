import React, { Component } from 'react';
class Form extends Component {
    render () {
        return (
             
                <form className="demoForm">
                  <h2>Sign up</h2>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control"
                      name="email" />
                  </div>
                  </form>
        )
    
        }}
        export default Form;