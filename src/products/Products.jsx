import React, { useEffect, useState } from 'react'
import "./Products.css"
import headerimg from "../assets/792c9ed9042468d861c5d0a364eec042e7279340.png"
import houseimg from "../assets/image12.png"

const Products = () => {

    const [data, setData] = useState([]);
    const [rooms, setRooms] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        fetch("https://698c128c21a248a27360636a.mockapi.io/house")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, []);


    function plus(id) {
        setRooms(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };


    function minus(id) {
        setRooms(prev => {
            if (!prev[id] || prev[id] <= 0) {
                alert("Error: No rooms");
                return prev; 
            }
            return {
                ...prev,
                [id]: prev[id] - 1
            };
        });
    }

    return (
        <div style={{
            backgroundColor: "rgb(255, 248, 242)"
        }}>

            {/* Header */}

            <header style={{
                height: "800px",
                width: "950px",
                backgroundImage: `url(${headerimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                marginTop: "-170px",
                marginLeft: "550px",
            }}>
            </header>

            {/* Header tugadi */}


            {/* Data malumot olish 1 qism */}

            <div className="Data1">
                <h1>The Best Cities</h1>
                <div className="Database-cards1">


                    {data.slice(0, 3).map((item) => (
                        <div key={item.id} className='data-card1'>
                            <img src={houseimg} alt="" />
                            <h1>{item.city}</h1>
                            <div className="h4">
                                <h4>{rooms[item.id] || 0} Rooms</h4>
                                <h4>{item.area}</h4>
                            </div>
                            <div className="addroom-price1">
                                <button onClick={() => plus(item.id)}>Add room</button>
                                <button onClick={() => minus(item.id)}>Reset</button>
                                <h3>$   {item.price}</h3>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {/* Data tugadi */}


            {/* Data malumot olish 1 qism */}

            <div className="Data1">
                <h1 style={{ marginTop: "-180px" }}>California houses</h1>
                <div className="Database-cards1">


                    {data.slice(0, 3).map((item) => (
                        <div key={item.id} className='data-card1'>
                            <img src={houseimg} alt="" />
                            <h1>{item.city}</h1>
                            <div className="h4">
                                <h4>{rooms[item.id] || 0} Rooms</h4>
                                <h4>{item.area}</h4>
                            </div>
                            <div className="addroom-price1">
                                <button onClick={() => plus(item.id)}>Add room</button>
                                <button onClick={() => minus(item.id)}>Reset</button>
                                <h3>$   {item.price}</h3>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {/* Data tugadi */}


            {/* Data malumot olish 1 qism */}

            <div className="Data1">
                <h1 style={{ marginTop: "-180px" }} >Miami houses</h1>
                <div className="Database-cards1">


                    {data.slice(0, 3).map((item) => (
                        <div key={item.id} className='data-card1'>
                            <img src={houseimg} alt="" />
                            <h1>{item.city}</h1>
                            <div className="h4">
                                <h4>{rooms[item.id] || 0} Rooms</h4>
                                <h4>{item.area}</h4>
                            </div>
                            <div className="addroom-price1">
                                <button onClick={() => plus(item.id)}>Add room</button>
                                <button onClick={() => minus(item.id)}>Reset</button>
                                <h3>$   {item.price}</h3>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {/* Data tugadi */}

        </div>
    )
}

export default Products
