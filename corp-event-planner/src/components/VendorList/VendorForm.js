import React, { useState } from "react";

import styled from "styled-components";


const VendorForm = (props) => {

    const [vendor, setVendor] = useState({vendorId: "", vendorName: "", vendorPhone: "", vendorBudget: ""});

    console.log(vendor);

    const changeHandler = event => {

        setVendor({...vendor, [event.target.name]: event.target.value});

    }

    const submitForm = event => {
        event.preventDefault();

        const newVendor = {
            ...vendor,
            id: Date.now()
        };

        props.addVendor(newVendor);

    }

    const VForm = styled.div`
        display: flex;
        flex-flow: column wrap;
        width: 750px;
        border: 3px solid #1D3461;
        margin: 50px auto;
        padding: 100px;

    
    `

    return (
        <VForm>
        <form onSubmit={submitForm} className="form" tyle={{ textAlign: "center" }}>
            <label htmlFor="vendorId"> Vendor ID # </label>
            <input 
                className="form-control"
                type="text"
                name="vendorId"
                placeholder="Vendor ID #"
                value={vendor.id}
                onChange={changeHandler}
                style={{ padding: "30px, 300px" }}
            />

            <label htmlFor="vendorName"> Vendor Name </label>
            <input 
                className="form-control"
                type="text"
                name="vendorName"
                placeholder="Vendor Name"
                value={vendor.name}
                onChange={changeHandler}
                style={{ padding: "30px, 300px" }}
            />

            <label htmlFor="vendorPhone"> Vendor Phone# </label>
            <input 
                className="form-control"
                type="text"
                name="vendorPhone"
                placeholder="Vendor Phone #"
                value={vendor.phone}
                onChange={changeHandler}
                style={{ padding: "30px, 300px" }}
            />

            <label htmlFor="vendorBudget"> Vendor Name </label>
            <input 
                className="form-control"
                type="text"
                name="vendorName"
                placeholder="Vendor Name"
                value={vendor.name}
                onChange={changeHandler}
                style={{ padding: "30px, 300px" }}
            />

            <button type="submit">Add Vendor</button>
        </form>
        </VForm>
    )
}

export default VendorForm