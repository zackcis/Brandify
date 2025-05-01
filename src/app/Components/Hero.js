"use client"
import { useState } from "react";
import './Hero.css'
import { MoveRight } from "lucide-react";


const Hero = () => {


    return (
        <>   
            <section className="flex justify-center items-center py-14 w-full not-md:flex-col">
                <div className="w-[40%] h-[100%] flex flex-col not-md:w-[95%]">
                    <div className="w-[90%] py-4 not-md:py-1 not-md:w-full">
                        <p className="text-4xl md:text-5xl lg:text-6xl  font-bold mb-6">Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8d5bf5] to-[#f8711c]">Personnal Brand</span> with Ai</p>
                    </div>
                    <div className="w-[90%] not-md:w-full">
                        <p className="text-gray-400 text-2xl py-4 not-md:py-1">Generate a professional, cohesive brand identity in minutes with our AI-powered platform. Stand out with colors, typography,
                            and visuals that perfectly represent you.</p>
                    </div>
                    <div className="w-[90%] not-md:w-full flex space-x-4 not-md:flex-col not-md:justify-center not-md:items-center not-md:place-self-center not-md:space-y-4 not-md:gap-5 not-md:my-4 ">
                        <button className="cursor-pointer p-4 px-11 flex  text-white bg-gradient-to-r from-[#8d5bf5] to-[#f8711c]  rounded-lg text-xl not-md:w-[100%] text-center not-md:place-self-center not-md:m-0">Get Started <MoveRight className="ml-3" /></button>
                        <button className="cursor-pointer p-4 px-11 border rounded-lg text-xl not-md:w-[100%] text-center not-md:place-self-center">View Examples</button>
                    </div>
                </div>

                <div className="w-[40%] h-[100%] not-md:w-[90%] ">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Personal branding"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>
            </section>
        </>
    )
};
export default Hero;