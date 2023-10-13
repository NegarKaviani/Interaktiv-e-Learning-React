import React from "react";
import Sidebar from "./sidebar"; 
import fraud from "../images/fraud_prevention.png";
import itsecurity from "../images/it_security.png";
import data_protection from "../images/data_protection.png";
import wphg from "../images/wphg.png";
import { useSelector } from 'react-redux';
  
export default function MainContent(){
    const course = useSelector( (courses) => courses.courses )
    return(
        <div className="main-content flex flex-col lg:flex-row gap-6">
            <Sidebar />
            <div className="courses w-full lg:w-9/12">
                <p className="text-2xl text-zinc-500 font-semibold mb-6">e-Learning Courses</p>
                <div className="courses-wrapper">
                    <div className="course-card bg-white pt-7 px-4 lg:pl-0 lg:pr-6 flex flex-col lg:flex-row items-start mb-5">
                        <div className="logo mx-auto w-24 h-16 lg:h-12">
                            <img src={fraud} className="w-full h-full object-contain" alt=""/>
                        </div>
                        <div className="courses-info w-full lg:w-10/12">
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 text-lg leading-6 text-zinc-500 font-bold ">
                                    Intensification of money Laundering prevention-private customer advice
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">30min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 text-lg leading-6 text-zinc-500 font-bold ">
                                    Basic Training - Preventation of Money Laundering and Terrorist Financing(V3.0)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">44min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 text-lg leading-6 text-zinc-500 font-bold ">
                                    Advanced Training - Preventation of Money Laundering and Terrorist Financing(V3.0)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">22min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="course-card bg-white pt-7 px-4 lg:pl-0 lg:pr-6 flex flex-col lg:flex-row items-start mb-5">
                        <div className="logo mx-auto w-24 h-16 lg:h-12">
                            <img src={itsecurity} className="w-full h-full object-contain" alt=""/>
                        </div>
                        <div className="courses-info w-full lg:w-10/12">
                            <div className="course-detail flex mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    IT Security Basics(V1.01.3)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">40min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: March 14, 2024
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    Basic training It security and information security (V1.0)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">60min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    Advanced training It security and information security (V1.1)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">29min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="course-card bg-white pt-7 px-4 lg:pl-0 lg:pr-6 flex flex-col lg:flex-row items-start mb-5">
                        <div className="logo mx-auto w-24 h-16 lg:h-12">
                            <img src={data_protection} className="w-full h-full object-contain"alt=""/>
                        </div>
                        <div className="courses-info w-full lg:w-10/12">
                            <div className="course-detail flex mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                   Basic training data protection (V2.0)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">0min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    Privacy basics (V1.00.2)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">40min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    In-depth training on data protection (V1.0)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">51min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    Privacy basics 1.0
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">40min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="course-card bg-white pt-7 px-4 lg:pl-0 lg:pr-6 flex flex-col lg:flex-row items-start mb-5">
                        <div className="logo mx-auto w-24 h-16 lg:h-12">
                            <img src={wphg} className="w-full h-full object-contain" alt=""/>
                        </div>
                        <div className="courses-info w-full lg:w-10/12">
                            <div className="course-detail flex mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    WpHG Compliance basics (V1.00.3)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">30min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            <div className="course-detail flex gap-6 mb-7">
                                <p className="course-name w-9/12 leading-6 text-zinc-500 font-bold ">
                                    In-depth WpHG - sales Representative (V1.00.2)
                                </p>
                                <div className="w-1/4">
                                    <div className="duration flex flex-col lg:flex-row justify-between">
                                        <p className="duration-text text-zinc-500">30min</p>
                                        <div className="progress flex items-center gap-1.5">
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                            <div className="h-3 w-3 bg-zinc-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="duration-text text-zinc-500">
                                        To be done by: -
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}