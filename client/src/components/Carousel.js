import React from 'react';
import Food4 from './Images/Food4.jpg';
import Food2 from './Images/Food2.jpg';
import Food3 from './Images/Food3.jpg'
export default function Carousel() {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={Food2} class="d-block w-100" alt="..." style={{ height: 370 }} />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={Food4} class="d-block w-100" alt="..." style={{height:370}} />
                </div>
                <div class="carousel-item">
                    <img src={Food3} class="d-block w-100" alt="..." style={{height:370}} />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>




    );
}