import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const InvoiceAddLayer = () => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex flex-wrap align-items-center justify-content-end gap-2">
                    <button
                        type="button"
                        className="btn btn-sm btn-primary-600 radius-8 d-inline-flex align-items-center gap-1"
                    >
                        <Icon icon="simple-line-icons:check" className="text-xl" />
                        Save
                    </button>
                </div>
            </div>
            <div className="card-body py-40">
                <div className="row justify-content-center" id="invoice">
                    <div className="col-lg-8">
                        <div className="shadow-4 border radius-8">
                            <div className="p-20 border-bottom">
                                <div className="row justify-content-between g-3">
                                    <div className="col-sm-4">
                                        <h3 className="text-xl">Invoice #3492</h3>
                                        <p className="mb-1 text-sm">
                                            Date Issued:{" "}
                                            <span className="editable text-decoration-underline">
                                                25/08/2020
                                            </span>{" "}
                                            <span className="text-success-main">
                                                <Icon icon="mage:edit" />
                                            </span>
                                        </p>
                                        <p className="mb-0 text-sm">
                                            Date Due:{" "}
                                            <span className="editable text-decoration-underline">
                                                29/08/2020
                                            </span>{" "}
                                            <span className="text-success-main">
                                                <Icon icon="mage:edit" />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <img
                                            src="assets/images/logo.png"
                                            alt="image_icon"
                                            className="mb-8"
                                        />
                                        <p className="mb-1 text-sm">
                                            4517 Washington Ave. Manchester, Kentucky 39495
                                        </p>
                                        <p className="mb-0 text-sm">random@gmail.com, +1 543 2198</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-28 px-20">
                                <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
                                    <div>
                                        <h6 className="text-md">Issus For:</h6>
                                        <table className="text-sm text-secondary-light">
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td className="ps-8">
                                                        :{" "}
                                                        <span className="editable text-decoration-underline">
                                                            Will Marthas
                                                        </span>
                                                        <span className="text-success-main">
                                                            <Icon icon="mage:edit" />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td className="ps-8">
                                                        :{" "}
                                                        <span className="editable text-decoration-underline">
                                                            4517 Washington Ave.USA
                                                        </span>{" "}
                                                        <span className="text-success-main">
                                                            <Icon icon="mage:edit" />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Phone number</td>
                                                    <td className="ps-8">
                                                        :{" "}
                                                        <span className="editable text-decoration-underline">
                                                            +1 543 2198
                                                        </span>{" "}
                                                        <span className="text-success-main">
                                                            <Icon icon="mage:edit" />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <table className="text-sm text-secondary-light">
                                            <tbody>
                                                <tr>
                                                    <td>Issus Date</td>
                                                    <td className="ps-8">:25 Jan 2024</td>
                                                </tr>
                                                <tr>
                                                    <td>Order ID</td>
                                                    <td className="ps-8">:#653214</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipment ID</td>
                                                    <td className="ps-8">:#965215</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="mt-24">
                                    <div className="table-responsive scroll-sm">
                                        <table
                                            className="table bordered-table text-sm"
                                            id="invoice-table"
                                        >
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-sm">
                                                        SL.
                                                    </th>
                                                    <th scope="col" className="text-sm">
                                                        Items
                                                    </th>
                                                    <th scope="col" className="text-sm">
                                                        Qty
                                                    </th>
                                                    <th scope="col" className="text-sm">
                                                        Units
                                                    </th>
                                                    <th scope="col" className="text-sm">
                                                        Unit Price
                                                    </th>
                                                    <th scope="col" className="text-sm">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="text-center text-sm">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>Apple's Shoes</td>
                                                    <td>5</td>
                                                    <td>PC</td>
                                                    <td>$200</td>
                                                    <td>$1000.00</td>
                                                    <td className="text-center">
                                                        <button type="button" className="remove-row">
                                                            <Icon
                                                                icon="ic:twotone-close"
                                                                className="text-danger-main text-xl"
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>02</td>
                                                    <td>Apple's Shoes</td>
                                                    <td>5</td>
                                                    <td>PC</td>
                                                    <td>$200</td>
                                                    <td>$1000.00</td>
                                                    <td className="text-center">
                                                        <button type="button" className="remove-row">
                                                            <Icon
                                                                icon="ic:twotone-close"
                                                                className="text-danger-main text-xl"
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03</td>
                                                    <td>Apple's Shoes</td>
                                                    <td>5</td>
                                                    <td>PC</td>
                                                    <td>$200</td>
                                                    <td>$1000.00</td>
                                                    <td className="text-center">
                                                        <button type="button" className="remove-row">
                                                            <Icon
                                                                icon="ic:twotone-close"
                                                                className="text-danger-main text-xl"
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>04</td>
                                                    <td>Apple's Shoes</td>
                                                    <td>5</td>
                                                    <td>PC</td>
                                                    <td>$200</td>
                                                    <td>$1000.00</td>
                                                    <td className="text-center">
                                                        <button type="button" className="remove-row">
                                                            <Icon
                                                                icon="ic:twotone-close"
                                                                className="text-danger-main text-xl"
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            id="addRow"
                                            className="btn btn-sm btn-primary-600 radius-8 d-inline-flex align-items-center gap-1"
                                        >
                                            <Icon
                                                icon="simple-line-icons:plus"
                                                className="text-xl"
                                            />
                                            Add New
                                        </button>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between gap-3 mt-24">
                                        <div>
                                            <p className="text-sm mb-0">
                                                <span className="text-primary-light fw-semibold">
                                                    Sales By:
                                                </span>{" "}
                                                Jammal
                                            </p>
                                            <p className="text-sm mb-0">Thanks for your business</p>
                                        </div>
                                        <div>
                                            <table className="text-sm">
                                                <tbody>
                                                    <tr>
                                                        <td className="pe-64">Subtotal:</td>
                                                        <td className="pe-16">
                                                            <span className="text-primary-light fw-semibold">
                                                                $4000.00
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-64">Discount:</td>
                                                        <td className="pe-16">
                                                            <span className="text-primary-light fw-semibold">
                                                                $0.00
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-64 border-bottom pb-4">Tax:</td>
                                                        <td className="pe-16 border-bottom pb-4">
                                                            <span className="text-primary-light fw-semibold">
                                                                0.00
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-64 pt-4">
                                                            <span className="text-primary-light fw-semibold">
                                                                Total:
                                                            </span>
                                                        </td>
                                                        <td className="pe-16 pt-4">
                                                            <span className="text-primary-light fw-semibold">
                                                                $1690
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-64">
                                    <p className="text-center text-secondary-light text-sm fw-semibold">
                                        Thank you for your purchase!
                                    </p>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between align-items-end mt-64">
                                    <div className="text-sm border-top d-inline-block px-12">
                                        Signature of Customer
                                    </div>
                                    <div className="text-sm border-top d-inline-block px-12">
                                        Signature of Authorized
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default InvoiceAddLayer;