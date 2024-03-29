﻿import React, { useState, useEffect } from 'react'
import { number } from 'yup/lib/locale'
import './Sort.css'

export const Sort = (props) => {

    const [deal, setDeal] = useState("")
    const [sortPrice, setSortPrice] = useState("")
    const [date, setDate] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    useEffect(() => {

        passData();

    }, [deal, sortPrice, date, minPrice, maxPrice])

    const getDeal = (e) => {
        setDeal(e.target.value)
    };

    const getPrice = (e) => {
        setSortPrice(e.target.value)
    };

    const getDate = (e) => {
        setDate(e.target.value)
    };

    const getMinPrice = (e) => {

        setMinPrice(Number(e.target.value))

    };

    const getMaxPrice = (e) => {
        setMaxPrice(Number(e.target.value))
    };

    const passData = () => {
        props.getData(deal, sortPrice, date, minPrice, maxPrice)
    };


    return (
        <div className="container">
            <div className="row">
                <div className="py-3 px-3 d-md-flex align-items-center">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <div className="select-wrap">
                            <button className={deal == "" ? "btn btn-outline-success px-3 active" : "btn btn-outline-success px-3"} name="deal" value="" onClick={getDeal} >All</button>
                        </div>
                        <div className="select-wrap">
                            <button className={deal == "Rent" ? "btn btn-outline-success px-3 active" : "btn btn-outline-success px-3"} name="deal" value="Rent" onClick={getDeal}>Rent</button>
                        </div>
                        <div className="select-wrap">
                            <button className={deal == "Sale" ? "btn btn-outline-success px-3 active" : "btn btn-outline-success px-3"} name="deal" value="Sale" onClick={getDeal}>Sale</button>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="select-wrap">
                            <input type="number" className="form-control" name="minPrice" min="0" placeholder="Min Price" onChange={getMinPrice} />
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="select-wrap">
                            <input type="number" className="form-control" name="maxPrice" placeholder="Max Price" onChange={getMaxPrice} />
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="select-wrap">
                            <span className="icon icon-arrow_drop_down"></span>
                            <select name="price" className="form-control d-block rounded-0" onClick={getPrice}>
                                <option value="">Sort by Price</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="select-wrap">
                            <span className="icon icon-arrow_drop_down"></span>
                            <select name="date" className="form-control d-block rounded-0" onClick={getDate}>
                                <option value="">Sort by Date</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}