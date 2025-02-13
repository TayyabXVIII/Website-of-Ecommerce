import React from 'react';

const About = () => {
    return (
        <div className="container py-5">
            <h1 className="display-4 fw-bold text-center">About Us</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <p className="lead">
                        Welcome to <strong>Style Hive</strong>! We are dedicated to bringing you the latest fashion trends and top-quality products.
                        Our mission is to provide a seamless shopping experience with a diverse collection of clothing, jewelry, and electronics.
                    </p>
                    <p className="lead">
                        Founded with a passion for style and quality, our team works tirelessly to curate the best products for our customers.
                        Your satisfaction is our priority, and we strive to ensure that every purchase you make is a delightful one.
                    </p>
                    <p className="lead">
                        Thank you for choosing <strong>Style Hive</strong>. Happy shopping!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
