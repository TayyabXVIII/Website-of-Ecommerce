import React from 'react'
// import Products from './Products'

const Home = () => {
    return (
        <>
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                        <video src="src\assets\bv3.mp4" autoPlay loop muted style={{objectFit:"cover",width:"100%"}} height="610px"></video>
                    <div className="card-img-overlay">
                        <div className="container">
                        <h5 className="card-title display-3 text-align fw-bolder">Here Trends Come to Life!</h5>
                        <p className="card-text display-6">Where every trend finds its buzz!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Home
