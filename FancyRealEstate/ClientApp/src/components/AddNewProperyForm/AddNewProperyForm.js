/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import * as buildingTypeService from '../../services/buildingTypeService'
import * as propertyTypeService from '../../services/propertyTypeService'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik'
import { CloudinaryWidget } from './CloudinaryWidget'
import './AddNewProperyForm.css'
import { AddressRow } from './AddressRow'
import {PropertyTypeForm} from './PropertyTypeForm'


export class AddNewProperyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyTypes: [],
            buildingTypes: [],
            city: "",
            district: "",
            street: "",
            number: "",
            propertyType: "",
            year: "",
            size: "",
            floor: "",
            ofTotalFloors: "",
            typeOfDeal: "",
            buildingType: "",
            features: [],
            description: "",
            imageIds: [],
            imageUrls: []
        }
    }

    componentDidMount() {

        buildingTypeService.getAll().then(res => this.setState({ buildingTypes: res }));
        propertyTypeService.getAll().then(res => this.setState({ propertyTypes: res }));
    }

    
    addressDataFronChild = (city, district, street, number) => {
        this.setState({ city: city });
        this.setState({ district: district });
        this.setState({ street: street });
        this.setState({ number: number });
    }

    propertyTypeDateFromChild = (propertyType) =>{
        this.setState({propertyType: propertyType})
    }


    imagesDateFromChild = (imageUrl, imageId) => {
        this.setState((s) => ({ imageUrls: this.s.imageUrls, ...imageUrl }));
        this.setState((s) => ({ imageIds: this.s.imageIds, ...imageId }));
    }

    render() {

        return (

            <div className="container">
                <Formik
                    enableReinitialize
                    initialValues={this.state}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        // When button submits form and form is in the process of submitting, submit button is disabled
                        setSubmitting(true);

                        // Simulate submitting to database, shows us values submitted, resets form
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);
                        }, 500);
                    }}

                >
                    {({ values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting }) => (
                        <Form className="mt-5" onSubmit={handleSubmit}>
                            <AddressRow addressData={this.addressDataFronChild} />
                            <Row form>
                                <Col md={4}>
                                 <PropertyTypeForm propertyTypeData={this.propertyTypeDateFromChild}/>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="year">Year</Label>
                                        <Input type="number" name="year" id="year" min={1900} max={2021} defaultValue={values.year} onChange={handleChange} onBlur={handleBlur} />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="size">Size</Label>
                                        <Input type="number" name="size" id="size" min={0} defaultValue={values.size} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="floor">Floor</Label>
                                        <Input type="number" name="floor" id="floor" min={0} defaultValue={values.floor} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="ofTotalFloors">Of Total Floors</Label>
                                        <Input type="number" name="ofTotalFloors" id="ofTotalFloors" min={0} defaultValue={values.floor} onChange={handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 2, offset: 5 }}>
                                    <FormGroup>
                                        <Label for="typeOfDeal">Type Of Deal</Label>
                                        <Input type="select" name="typeOfDeal" id="typeOfDeal" defaultValue={values.typeOfDeal} onChange={handleChange} >
                                            <option value="">Choose Deal</option>
                                            <option value="forRent">For Rent</option>
                                            <option value="forDeal">For Deal</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form className="row justify-content-around">
                                <Col md={2}>

                                    <FormGroup tag="fieldset" onChange={handleChange}>
                                        <legend className="col-form-label"><b>Buildin Type</b></legend>
                                        {this.state.buildingTypes.map(b =>
                                            <FormGroup check inline key={b}>
                                                <Label for="buildingType">
                                                    <Input type="radio" name="buildingType" id="buildingType" value={b} /> {b}
                                                </Label>
                                            </FormGroup>
                                        )}
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup tag="fieldset" onChange={handleChange}>
                                        <legend className="col-form-label"><b>Features</b></legend>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="internet" /> Internet
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="healting" /> Healting
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="securitySystem" /> Security System
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="airCondition" /> Air Condition
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="garage" /> Garage
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="elevator" /> Elevator
                                </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="checkbox" name="features" id="features" value="Renovated" /> Renovated
                                </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <CloudinaryWidget imagesData={this.imagesDateFromChild} />
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input type="textarea" name="description" id="description" rows="10" onChange={handleChange} onBlur={handleBlur} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button type="submit" color="primary" size="lg" disabled={isSubmitting} >Add Property</Button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-5"></div>
            </div >
        );
    }
}