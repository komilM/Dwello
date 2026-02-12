import React, { useEffect, useState } from 'react'
import "./Home.css"
import headerimg from "../assets/792c9ed9042468d861c5d0a364eec042e7279340.png"
import sectionimg from "../assets/luxury_and_rich_home_exterior_side_view.png"
import maincardimg1 from "../assets/Vector.png"
import maincardimg2 from "../assets/Vector 1.png"
import maincardimg3 from "../assets/Group 1.png"
import maincardimg4 from "../assets/Clip path group.png"
import houseimg from "../assets/image12.png"
import footerhouses1 from "../assets/Mask group.png"
import footerhouses2 from "../assets/Mask group 1.png"
import footerhouses3 from "../assets/Mask group 2.png"
import footercardimg from "../assets/image 1.png"
import footercardimg1 from "../assets/image 39 1.png"
import footercardimg2 from "../assets/image 31 1.png"

const Home = () => {

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
    }

    return (
        <div>

            {/* Header */}

            <div style={{
                backgroundColor: "rgb(255, 248, 242)"
            }} className="header-main">

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

                    {/* Header menu */}

                    <div className="header-texts">

                        <h1>Find Your Dream Home</h1>
                        <p>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
                        <button>Sign up</button>

                    </div>

                    {/* Header menu tugadi */}

                    {/* Header btns part */}

                    <div className="header-btns-menu">

                        <button onClick={() => window.location.href = "/page"}>Location</button>
                        <button onClick={() => window.location.href = "/page"}>Type</button>
                        <button onClick={() => window.location.href = "/page"}>Price Range</button>
                        <button style={{ width: "156px", backgroundColor: "#2B1B12", color: "white" }}>Sign up</button>

                    </div>

                    {/* Header btns part tugadi */}

                </header>

            </div>

            {/* Header tugadi */}


            {/* Section */}

            <section>

                <img src={sectionimg} alt="" />

                <div className="section-texts">

                    <h1>We Help You To Find Your Dream Home</h1>
                    <h4>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</h4>

                    <div className="section-texts-item">

                        <div className="item">
                            <h2>8K+</h2>
                            <p>Houses Available</p>
                        </div>


                        <div className="item">
                            <h2>6K+</h2>
                            <p>Houses Sold</p>
                        </div>


                        <div className="item">
                            <h2>2K+</h2>
                            <p>Trusted Agents</p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Section tugadi */}


            {/* Main */}

            <main>

                <h1>Why Choose Us</h1>
                <p>Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>

                <div className="main-cards">

                    <div className="main-card">
                        <div className="main-card-img">
                            <img src={maincardimg1} alt="" />
                        </div>
                        <h2>Expert Guidance</h2>
                        <h3>Benefit from our team's seasoned expertise for a smooth buying experience</h3>
                    </div>

                    <div className="main-card">
                        <div className="main-card-img">
                            <img src={maincardimg2} alt="" />
                        </div>
                        <h2>Expert Guidance</h2>
                        <h3>Benefit from our team's seasoned expertise for a smooth buying experience</h3>
                    </div>

                    <div className="main-card">
                        <div className="main-card-img">
                            <img src={maincardimg3} alt="" />
                        </div>
                        <h2>Expert Guidance</h2>
                        <h3>Benefit from our team's seasoned expertise for a smooth buying experience</h3>
                    </div>

                    <div className="main-card">
                        <div className="main-card-img">
                            <img src={maincardimg4} alt="" />
                        </div>
                        <h2>Expert Guidance</h2>
                        <h3>Benefit from our team's seasoned expertise for a smooth buying experience</h3>
                    </div>

                </div>

            </main>

            {/* Main tugadi */}

            {/* Data malumot olish qismi */}

            <div className="Data">
                <h1>Our Popular Residences</h1>
                <div className="Database-cards">


                    {data.slice(0, 3).map((item) => (
                        <div key={item.id} className='data-card'>
                            <img src={houseimg} alt="" />
                            <h1>{item.city}</h1>
                            <div className="h4">
                                <h4>{rooms[item.id] || 0} Rooms</h4>
                                <h4>{item.area}</h4>
                            </div>
                            <div className="addroom-price">
                                <button onClick={() => plus(item.id)}>Add room</button>
                                <h3>$   {item.price}</h3>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

            {/* Data tugadi */}


            {/* Footer */}

            <footer>
                <h1>What People Say About Dwello</h1>
                <div className="footer-cards">
                    <div className="footer-card">
                        <img src={footerhouses1} alt="" />
                        <div className="footer-card-profile">
                            <img src={footercardimg} alt="" />
                            <div className="footer-text">
                                <h2>Sarah Nguyen</h2>
                                <p>San Francisco</p>
                            </div>
                        </div>
                        <h5>Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</h5>
                    </div>
                    <div className="footer-card">
                        <img src={footerhouses2} alt="" />
                        <div className="footer-card-profile">
                            <img src={footercardimg1} alt="" />
                            <div className="footer-text">
                                <h2>Sarah Nguyen</h2>
                                <p>San Francisco</p>
                            </div>
                        </div>
                        <h5>Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</h5>
                    </div>
                    <div className="footer-card">
                        <img src={footerhouses3} alt="" />
                        <div className="footer-card-profile">
                            <img src={footercardimg2} alt="" />
                            <div className="footer-text">
                                <h2>Sarah Nguyen</h2>
                                <p>San Francisco</p>
                            </div>
                        </div>
                        <h5>Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</h5>
                    </div>
                </div>
                <button onClick={() => window.location.href = "/page"}>Read more</button>
            </footer>

        </div>
    )
}

export default Home
