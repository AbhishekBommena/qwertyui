import React, { useState } from "react"
// import cdata from "./customers"
import cdata from "./custlist.json"

function CustomersTable() {
    const [customers, setCustomers] = useState(cdata)

    const getCustRowTags = () => {
        const rowTags = customers.map(c => {
            return (
                <tr>
                    <td>{c.id}</td>
                    <td>{c.firstName}</td>
                    <td>{c.lastName}</td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                </tr>
            )
        })
        return rowTags
    }

    return (
        <>
            <h3>Customers Table</h3>
            <table>
                <tr>
                    <th>Cust Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                   
                </tr>
                { getCustRowTags()  }
            </table>
        </>
    )
}

export default CustomersTable;