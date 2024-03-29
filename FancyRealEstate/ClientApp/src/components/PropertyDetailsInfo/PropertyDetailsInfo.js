/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import './PropertyDetailsInfo.css'
import { PropertyGallery } from '../PropertyGallery/PropertyGallery'


export const PropertyDetailsInfo = (props) => {

    const [data, setData] = useState([])
    const [feature, setFeature] = useState([])

    useEffect(() => {

        setData(props?.data)

    }, [props])

    useEffect(() => {

        addFeature()

    }, [data])

    const addFeature = () => {

        if (data.renovated) {
            setFeature(pre => [...pre, "Renovated"])
        }
        if (data.garage) {
            setFeature(pre => [...pre, "Garage"])
        }
        if (data.elevator) {
            setFeature(pre => [...pre, "Elevator"])
        }
        if (data.securitySystem) {
            setFeature(pre => [...pre, "Security System"])
        }
        if (data.airCondition) {
            setFeature(pre => [...pre, "Air Condition"])
        }
        if (data.heating) {
            setFeature(pre => [...pre, "Heating"])
        }
        if (data.internet) {
            setFeature(pre => [...pre, "Internet"])
        }

    };

    return (
        <div >
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bg-white property-body border-bottom border-left border-right border-top">
                            <div className="row">
                                <div className="col-md-4">
                                    <strong className="text-success h1 mb-3">{data?.price} &euro;</strong>
                                </div>
                                <div className="col-md-8 text-center">
                                    <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                                        <li className="ml-3">
                                            <span className="property-specs">Year</span>
                                            <span className="property-specs-number">{data?.year}</span>

                                        </li>
                                        <li className="ml-3">
                                            <span className="property-specs">Property Type</span>
                                            <span className="property-specs-number">{data?.propertyType}</span>
                                        </li>
                                        <li className="ml-3">
                                            <span className="property-specs">Building Type</span>
                                            <span className="property-specs-number">{data?.buildingType}</span>
                                        </li>
                                        <li className="ml-3">
                                            <span className="property-specs">Size</span>
                                            <span className="property-specs-number">{data?.size} m<sup>2</sup></span>
                                        </li>
                                        <li className="ml-3">
                                            <span className="property-specs">Floor</span>
                                            <span className="property-specs-number">{data?.floor}</span>
                                        </li>
                                        <li className="ml-3">
                                            <span className="property-specs">Total Floor</span>
                                            <span className="property-specs-number">{data?.totalNumberOfFloor}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4" />
                                <div className="property-specs pr-3">Features</div>
                                <div className="property-specs-number">{feature.join(", ")}</div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">City</span>
                                    <strong className="d-block">{data?.city}</strong>
                                </div>
                                <div className="col-md-6 col-lg-3 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">District</span>
                                    <strong className="d-block">{data?.district}</strong>
                                </div>
                                <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Address</span>
                                    <strong className="d-block">{data?.street} №{data?.buildingNumber}</strong>
                                </div>
                                <div className="col-md-6 col-lg-2 text-center border-bottom border-top py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Building type</span>
                                    <strong className="d-block">{data?.buildingType}</strong>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6 col-lg-3 text-center border-bottom py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Seller</span>
                                    <strong className="d-block">{data?.sellerFullName}</strong>
                                </div>
                                <div className="col-md-6 col-lg-3 text-center border-bottom py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Phone</span>
                                    <strong className="d-block">{data?.sellerPhoneNumber}</strong>
                                </div>
                                <div className="col-md-6 col-lg-3 text-center border-bottom py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Email</span>
                                    <strong className="d-block">{data?.sellerEmail}</strong>
                                </div>
                                <div className="col-md-6 col-lg-3 text-center border-bottom py-3">
                                    <span className="d-inline-block text-black mb-0 caption-text">Published before</span>
                                    <strong className="d-block">{data?.daysAgo} day/s</strong>
                                </div>
                            </div>
                            <h2 className="h4 text-black">More Info</h2>
                            <p>{data?.description}</p>
                            {data?.imageIds !== undefined && <PropertyGallery images={data.imageIds} />}
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div >
            </div >
        </div >
    )
}