/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import * as buildingTypeService from '../../../services/buildingTypeService'

export const BuildingTypeForm = (props) => {

    const [buildingTypes, setBuildingTypes] = useState([]);
    const [buildingType, setBuildingType] = useState("");

    useEffect(() => {

        buildingTypeService.getAll().then(res => { setBuildingTypes(res) });

    }, []);

    useEffect(() => {

        setBuildingType(props.passProps?.buildingType)
     
    }, [props.passProps]);

    useEffect(() =>{

        sendData();

    },[buildingType]);

    const sendData = () => {

        props.buildingTypeData(buildingType)

    }

    const isChecked = (value) =>{

        if (value === buildingType) {

            return true
        }

        return false
    }

    const handleBuildingType = (e) => {

        setBuildingType(e.target.value);

    }

    return (
        <FormGroup tag="fieldset" onChange={handleBuildingType} onBlur={props.passBlur}>
            <legend className="col-form-label"><b>Building Type</b></legend>
            {buildingTypes.map(b =>
                <FormGroup check inline key={b} >
                    <Label for="buildingType">
                        <Input type="radio" name="buildingType" id="buildingType" value={b} defaultChecked={isChecked(b)} /> {b}
                    </Label>
                </FormGroup>
            )}
            {props.passTouched.buildingType && props.passErrors.buildingType ? <div className="text-danger">{props.passErrors.buildingType}</div>: null}
        </FormGroup>
    );


};