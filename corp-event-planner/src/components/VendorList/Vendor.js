import React, { useState } from "react";

import VendorData from "./VendorData";

import VendorCard from "./VendorCard";
import VendorForm from "./VendorForm";

const Vendor = () => {

    const [vendor, setVendor] = useState(VendorData);

    const addVendor = ven => { setVendor([...vendor, ven])};

    return(
        <div className="Vendor">
            <h2 style={{ textAlign: "center" }}>Add Any Vendors for Your Event Here!</h2>
            <VendorForm addVendor={addVendor} />
            <VendorCard vendor={vendor} />
        </div>
    )
}

export default Vendor