import React, { useState } from "react"
// import cdata from "./customers"
import cdata from "./custlist.json"

function CustomersList() {
    const [customers, setCustomers] = useState(cdata)

    const getLiTags = () => {
        const liTags = customers.map(c => {
            return (
                <li className="list-group-item" key={c.id}>
                    {c.firstName} {c.lastName}
                </li>
            )
        })
        return liTags
    }

    return (
        <>
            <h3>List of Customers</h3>
            <ul className="list-group">
                {getLiTags()}
            </ul>
        </>
    )
}

export default CustomersList;