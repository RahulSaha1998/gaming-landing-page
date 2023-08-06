import React from 'react';
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-900 py-12'>
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-between lg:ml-44'>
        <div className='text-center sm:text-left'>
            <div className='flex justify-center sm:justify-start gap-5'>
                <img src="logo.png" alt="" className='h-12' />
                <img src="3NOT3 GAMING.png" alt="" className='h-12' />
            </div>
            <div className='text-white mt-4'>
                <h2 className='text-lg'>Address:</h2>
                <p className='text-gray-400'>Faridpur, Dhaka, Bangladesh</p>
                <h2 className='text-lg mt-4'>Mail:</h2>
                <p className='text-gray-400'>rahulsaha87928@gmail.com</p>
            </div>
        </div>
        <div className='text-center sm:text-center lg:text-left'>
            <h2 className='text-2xl text-white'>Stay Connected</h2>
            <p className='mt-2 text-gray-500 flex sm:items-center justify-center lg:justify-start'><FaFacebook className='mr-2' /> Facebook</p>
            <p className='mt-2 text-gray-500 flex items-center justify-center lg:justify-start'><FaTwitter className='mr-2' /> Twitter</p>
            <p className='mt-2 text-gray-500 flex items-center justify-center lg:justify-start'><FaDiscord className='mr-2' /> Discord</p>
            <p className='mt-2 text-gray-500 flex items-center justify-center lg:justify-start'><FaLinkedin className='mr-2' /> LinkedIn</p>
        </div>
        <div className='text-center sm:text-center lg:text-left'>
            <h2 className='text-2xl text-white'>Quick Links</h2>
            <p className='mt-2 text-gray-500'>About Us</p>
            <p className='mt-2 text-gray-500'>Zeux</p>
            <p className='mt-2 text-gray-500'>Careers</p>
            <p className='mt-2 text-gray-500'>Contact Us</p>
        </div>
    </div>
</footer>

    );
};

export default Footer;
