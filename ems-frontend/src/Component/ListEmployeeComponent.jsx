import React, { useEffect, useState } from 'react'
import { employeedetails } from '../Service/EmployeeService';

export default function ListEmployeeComponent() {

    const [employees, setemployees] = useState([]);

    useEffect(() => {

        employeedetails()
            .then((response) => {
                setemployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div className="container mt-4">

            <h3 className="text-center mb-4">Employee Table</h3>

            <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark text-center">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody className="text-center">

                    {
                        employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstname}</td>
                                <td>{emp.lastname}</td>
                                <td>{emp.email}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )
}