import React, { useEffect, useState } from 'react'
import { employeedetails } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function ListEmployeeComponent() {

    const [employees, setemployees] = useState([]);

    const navigate=useNavigate();

    useEffect(() => {

        employeedetails()
            .then((response) => {
                setemployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    function newemployee(){
        navigate("add-empl");

    }

    return (
        <div className="container mt-4">

            <h3 className="text-center mb-4">Employee Table</h3>
            <div className="text-start mb-3">
    <button className='btn btn-primary' onClick={newemployee}>
        Add Employee
    </button>
</div>

            <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark text-center">
                    <tr>
                        <th>id</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>email</th>
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