import React, { useState } from "react";

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