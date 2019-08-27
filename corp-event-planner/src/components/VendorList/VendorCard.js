import React from "react";

const VendorCard = props => {

    return (
        <div>
            {props.vendor.map(vendor => {
                return (
                    <div>
                        <h3>{vendor.id}</h3>
                        <h2>{vendor.vendorName}</h2>
                        <h2>{vendor.vendorPhone}</h2>
                        <h2>{vendor.vendorBudget}</h2>
                    </div>
                )
            
            })}

        </div>
    )
}

export default VendorCard