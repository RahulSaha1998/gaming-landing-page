import React from 'react';

const Organize = () => {
    return (
        <div className=''>
            <div className='mx-10 grid lg:grid-cols-2'>
                <div className='lg:mt-32 p-5'>
                    <h2 className='text-6xl text-white'><span className='text-green-500'>Organize</span><br />Tournaments</h2>
                    <h2 className='text-white text-2xl'>Create a oragniser profile to arrange events for other players and many more
                        Organize your circuit with seasons, regions and tiers
                    </h2>
                </div>
                <div>
                    <img className='lg:ml-10' src="pngwing 20.png" alt="" />
                </div>
            </div>

            <div className="lg:relative flex justify-center">
                <button className='btn btn-success lg:absolute -top-44 left-2/4'>Create Now</button>
            </div>
        </div>
    );
};

export default Organize;