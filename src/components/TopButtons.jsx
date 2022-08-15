import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id: 1,
            title: 'Jakarta'
        },
        {
            id: 2,
            title: 'Surabaya'
        },
        {
            id: 3,
            title: 'Yogyakarta'
        },
        {
            id: 4,
            title: 'Bandung'
        },
        {
            id: 5,
            title: 'Malang'
        },
    ]

    return ( 
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (   
                <button key={city.id} className="text-white text-bg font-medium"
                onClick={() => {
                    setQuery({q: city.title})
                }}
                >
                    {city.title}
                </button>
            ))}
 
        </div>
    )
}

export default TopButtons