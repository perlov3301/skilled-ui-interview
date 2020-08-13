import React from 'react';
import { useState, useEffect } from 'react';

function Employees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch("https://perlov3301.github.io/getxmljson/wikijsonarray.json")
          .then(res => res.json())
          .then(
            (result) => { setEmployees(result); }
          );
    });
    return (
        <div>
          <h2>Hello world</h2>
          <table>
            <thead>
              <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>age </th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id}>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
    );
}

export default Employees;