import React from 'react';
import Footer from '../../Footer/Footer';

const Checkout = () => {
    return (
        <div>
            <div className=" bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: 'url("rc3.png")' }}>

                <div className=' mx-auto grid lg:grid-cols-2'>
                    <div className="relative">
                        <img src="pngwing 7.png" alt="" className=" -top-10" />
                    </div>
                    <div className='lg:mt-52 lg:mr-28 text-end'>
                        <h2 className='text-6xl text-white'> <span className='text-green-500'>Future</span>Of Gaming</h2>
                        <h2 className='text-white text-2xl'>With VR,Metaverse & cloud gaming Next level Graphics and sounds no matter where you are with our VR and cloud gaming compatibility
                        </h2>
                    </div>

                </div>
                <div className="lg:relative flex justify-center">
                    <button className='btn btn-success lg:absolute -top-20 left-2/4'>Checkout</button>
                </div>
                <Footer></Footer>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Checkout;