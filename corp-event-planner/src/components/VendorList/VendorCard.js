import React from "react";

const VendorCard = props => {

    return (
        <div>
            {props.vendor.map(vendor => {
                return (
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">{vendor.vendorName}</h3>
                                    <p class="card-text">{vendor.vendorBudget}</p>
                                    <h5 class="card-title">{vendor.id}</h5>
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                                        See Vendor Details
                                </button>

                                    {/* Modal  */}
                                    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalScrollableTitle">Vendor Name: {vendor.vendorName}</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p> Vendor Phone Number: {vendor.vendorPhone} </p>
                                                    <p> Vendor Budget: {vendor.vendorBudget} </p>


                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary" >Close Vendor</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                   
                
            )

            })}

        </div>

    )
}


export default VendorCard