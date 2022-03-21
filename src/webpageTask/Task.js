import React from "react";
const Task = () => {
    return (
        <div><div className="home_container">
            <div className="heading">
                <h2>Explore</h2>
                <p>From one guest room to</p>
                <p>penthouses with pool and gardens</p>
            </div>
            <div className="images">
                <div className="left">
                    <div>
                        <img src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2000.jpg?size=626&ext=jpg&ga=GA1.2.1168831157.1644922700" />
                        <div className="postion">
                            <div className="first_content">
                                <h3>Room with one king size bed</h3>
                                <div className="price">
                                    <h5 className="tag_line">2205$</h5>
                                    <h5 className="tag_line">345K</h5>
                                    <button type="button" id="button">
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <img src="https://img.freepik.com/free-photo/cozy-sitting-room-design-with-dark-furniture-walls-combined-decoration_295714-924.jpg?w=996" />
                        <div className="postion">
                            <div className="first_content">
                                <h3>Penthouse for 8 Persons</h3>
                                <div className="price">
                                    <h5 className="tag_line">2039$</h5>
                                    <h5 className="tag_line">350$</h5>
                                    <button type="button" id="button">
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heading" style={{ marginTop: "20px" }}>
                <h2>About Us</h2>
                <p>Allows us to tell a shortstory</p>
            </div>
            <div className="images">
                <div className="left">
                    <div>
                        <img src="https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-night-with-cozy-design_105762-577.jpg?w=740" />
                    </div>
                    <div className="postion">
                        <div className="first_content">
                            <h2>chapter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <img src="https://img.freepik.com/free-photo/3d-render-modern-home-office_1048-10248.jpg?t=st=1647579891~exp=1647580491~hmac=356d2f9e63fe98588b8e10c3ba9968f4adfe5b424bc19a8c1de008f2665923e8&w=740" />
                    </div>
                    <div className="postion">
                        <div className="first_content">
                            <h2>chapter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <img src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="postion">
                        <div className="first_content">
                            <h2>chapter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div className="postion">
                        <div className="first_content">
                            <h2>chapter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Task;