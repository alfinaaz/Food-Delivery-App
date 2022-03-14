import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../actions/foodActions";
import Carousel from "../components/Carousel";
import Food from "../components/Food";
import Loading from "../components/Loading";
import Error from "../components/Error";
import foodItem from "../FoodItems";
export default function Home() {
    const dispatch = useDispatch();

    const foodsstate = useSelector(state => state.getAllFoodsReducer)

    const { foods, error, loading } = foodsstate;

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])

    return (
        <div>
            <Carousel />
            <div className="row justify-content-center">
                {loading ? <Loading /> : error? <Error error="Something went wrong" />  :
                    (
                        foodItem.map(foodItem => {
                            return <div className="col-md-4">
                                <div>
                                    <Food food={foodItem} />
                                </div>

                            </div>
                        })
                    )
                }

            </div>
        </div>
    )
}


