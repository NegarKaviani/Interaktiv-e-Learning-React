import React from "react";
import Sidebar from "./sidebar"; 
import fraud from "../images/fraud_prevention.png";
import itsecurity from "../images/it_security.png";
import data_protection from "../images/data_protection.png";
import wphg from "../images/wphg.png";
  
const MainContent = (state) => {
   
    return(
        <div className="main-content flex flex-col lg:flex-row gap-6">
            <Sidebar />
            <div className="courses w-full lg:w-9/12">
                <p className="text-2xl text-zinc-500 font-semibold mb-6">e-Learning Courses</p>
                <div className="courses-wrapper">
                {
                    state.courses.map((course) => { 
                        {(() => {
                            switch (course.cat) {
                            case 1:
                                return <div className="logo mx-auto w-24 h-16 lg:h-12">
                                <img src={fraud} className="w-full h-full object-contain" alt=""/>
                            </div>
                            case 2:
                                return <div className="logo mx-auto w-24 h-16 lg:h-12">
                                <img src={itsecurity} className="w-full h-full object-contain" alt=""/>
                            </div>
                            case 3:
                                return <div className="logo mx-auto w-24 h-16 lg:h-12">
                                <img src={data_protection} className="w-full h-full object-contain"alt=""/>
                            </div>
                            case 4:
                                return <div className="logo mx-auto w-24 h-16 lg:h-12">
                                <img src={wphg} className="w-full h-full object-contain" alt=""/>
                            </div>
                            default:
                                return null
                            }
                        })()}})
                }
                    
                </div>
            </div>
        </div>
    )
}

export default MainContent