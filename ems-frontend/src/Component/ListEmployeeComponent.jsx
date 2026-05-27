import React from 'react'

export default function ListEmployeeComponent() {

    let tables=[

        {
            "id":1,
            "firstname":"jitendra",
            "lastname":"Biswal",
            "email":"biswaljitendra860@gmail.com"
        },
        {
           "id":2,
            "firstname":"Rakesh",
            "lastname":"Mohanty",
            "email":"mohantyrakesh760@gmail.com" 
        },
        
        {
             "id":3,
            "firstname":"Sushree",
            "lastname":"Muduli",
            "email":"mudulisushree0@gmail.com"
        }


    ]


  return (
    <>
    

    <div className='container mt-5'>
        <div className='fs-3 text-center'>Employee Table</div>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>first-name</th>
                    <th>last-name</th>
                    <th>email</th>
                </tr>
            </thead>

            <tbody>

                {
                    tables.map((emp)=>{
                        return(
                            <tr key={emp.id}>

                                <td>{emp.id}</td>
                                <td>{emp.firstname}</td>
                                <td>{emp.lastname}</td>
                                <td>{emp.email}</td>


                            </tr>
                        )
                    })
                }

            </tbody>

        </table>

    </div>
    
    
    </>
   
  )
}
