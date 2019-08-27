import React, { useState } from "react";

const VendorForm = vendor => {

    const [vendors, setVendors] = useState([]);

    console.log(vendors);

    const changeHandler = event => {

        setVendors({...vendors, [event.target.name]: event.target.value});

    }

    const submitForm = event => {
        event.preventDefault();

    }

    return (
        <form onSubmit={submitForm} className="form">
            <label htmlFor="vendorId"> Vendor ID # </label>
            <input 
                type="text"
                name="vendorId"
                placeholder="Vendor ID #"
                value={vendor.id}
                onChange={changeHandler}
            />

            <label htmlFor="vendorName"> Vendor Name </label>
            <input 
                type="text"
                name="vendorName"
                placeholder="Vendor Name"
                value={vendor.name}
                onChange={changeHandler}
            />

            <label htmlFor="vendorPhone"> Vendor Phone# </label>
            <input 
                type="text"
                name="vendorPhone"
                placeholder="Vendor Phone #"
                value={vendor.phone}
                onChange={changeHandler}
            />

            <label htmlFor="vendorBudget"> Vendor Name </label>
            <input 
                type="text"
                name="vendorName"
                placeholder="Vendor Name"
                value={vendor.name}
                onChange={changeHandler}
            />

            <button type="submit">Add Vendor</button>
        </form>
    )
}

export default VendorForm