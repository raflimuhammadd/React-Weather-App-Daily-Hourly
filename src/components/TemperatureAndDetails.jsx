import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"; 

function TemperatureAndDetails() {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl
        text-cyan-300">
            <p>Rainy</p>
        </div>

        <div className="flex flex-row items-center 
            justify-between py-3 text-white"
        >
            <img src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="" className="w-20" 
            />
            <p className="text-5xl">34°C</p>
            <div className="flex flex-col space=y-2">

                <div className="flex font-light text-sm
                items-center justify-center">
                    <UilTemperature size={18} className="mr-1" />
                    Real Feel :
                    <spam className="font-medium ml-1">59°</spam>
                </div>
                <div className="flex font-light text-sm
                items-center justify-center">
                    <UilTear size={18} className="mr-1" />
                    Humidity :
                    <spam className="font-medium ml-1">65%</spam>
                </div>
                <div className="flex font-light text-sm
                items-center justify-center">
                    <UilWind size={18} className="mr-1" />
                    Wind :
                    <spam className="font-medium ml-1">11 km/h</spam>
                </div>
            </div>
        </div>

        <div className="flex flex-row items-center justify-center
        space-x-2 text-white text-sm py-3">

            <UilSun />
            <p className="font-light">
                Rise: <span className="font-medium ml-1">07.45 AM</span>
                </p>
            <p className="font-light">|</p>
            <UilSunset />
            <p className="font-light">
                Set: <span className="font-medium ml-1">05.25 PM</span>
                </p>
            <p className="font-light">|</p> 
            <UilSun />
            <p className="font-light">
                High: <span className="font-medium ml-1">57°</span>
                </p>
            <p className="font-light">|</p>

            <UilSun />
            <p className="font-light">
                Low: <span className="font-medium ml-1">25°</span>
                </p>
        </div>

    </div>
  )
}

export default TemperatureAndDetails