import React from 'react';
import './GetInvolved.css';

const GetInvolved = () => (
  <div className="form-container">
    <h1>Get Involved</h1>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Select a Cause:
        <select name="cause">
          <option>Education</option>
          <option>Clean Water</option>
          <option>Health Access</option>
          <option>Environmental Protection</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default GetInvolved;
