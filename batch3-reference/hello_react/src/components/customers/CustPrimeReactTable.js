import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import cdata from "./custlist.json"

const CustPrimeReactTable = () => {
    const [customers, setCustomers] = useState(cdata)

    return (
        <div>
            <div className="card">
                <DataTable value={customers} responsiveLayout="scroll">
                    <Column field="id" header="Id"></Column>
                    <Column field="firstName" header="First Name"></Column>
                    <Column field="lastName" header="Last Name"></Column>
                    <Column field="email" header="Email Addr."></Column>
                    <Column field="phone" header="Phone No."></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default CustPrimeReactTable;