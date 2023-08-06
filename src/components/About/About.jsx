import React from 'react';

const About = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: 'url("rc.png")' }}>
                {/* Your content goes here */}

                {/* SVG implementation */}
                <div className='p-6 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center align-items-center'>
                    <img src="val.png" alt="" className="w-full" />
                    <img src="rocket-league-logo.png" alt="" className="w-full" />
                    <img src="lg.png" alt="" className="w-full" />
                    <img src="cl.png" alt="" className="w-full" />

                    <img src="ap.png" alt="" className="w-full" />
                    <img src="pb.png" alt="" className="w-full" />
                    <img src="fr.png" alt="" className="w-full" />
                    <img src="cs.png" alt="" className="w-full" />

                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-success'>Play Now</button>
                </div>
            </div>


            <div>
                <div className='lg:ml-28 grid lg:grid-cols-2'>
                    <div className='lg:mt-32 p-5'>
                        <h2 className='text-6xl text-white'>About <span className='text-green-500'>Us</span></h2>
                        <h2 className='text-white text-2xl'>Here, in 3not3 we are as pleased as punch for a new era gaming under automation <br /> mechanics that help both the upright of e-sport infrastructure for players and <br /> organizer. Introducing striation for player monitor and asset service throw which <br /> team or service provider can easily communicate and arrange new feature and <br /> service by exploring web-technology of 3not3.
                        </h2>
                    </div>
                    <div className="relative">
                        <img src="pngwing 4.png" alt="" className="lg:absolute -top-96" />
                    </div>
                </div>
                <div className='lg:mt-10 flex justify-center'>
                    <button className='btn btn-success'>Know More</button>
                </div>
            </div>

            <div className=''>
                <div className=" bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: 'url("rc2.png")' }}>

                    <div className=' mx-auto grid lg:grid-cols-2'>
                        <div className="relative">
                            <img src="pngwing 5.png" alt="" className="lg:absolute -top-10" />
                        </div>
                        <div className='lg:mt-52 lg:mr-28 text-end'>
                            <h2 className='text-6xl text-white'> <span className='text-green-500'>Compete</span>In <br />Tournaments</h2>
                            <h2 className='text-white text-2xl'>Compete in exciting tournaments and get rewarded accordingly get to meet new players & EARN in the form of crypto
                            </h2>
                        </div>

                    </div>
                    <div className='lg:mt-10 flex justify-center'>
                        <button className='btn btn-success'>compete now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
