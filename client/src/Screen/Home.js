import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../actions/foodActions";
import Food from "../components/Food";
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
            <div className="row justify-content-center">
                {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong</h1>) :
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


