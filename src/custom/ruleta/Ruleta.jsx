import React, { useState, useRef, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: '100%', className: 'text-red-500' },
    { option: '40%' },
    { option: 'Tacos' },
    { option: 'Pupusas' },
    { option: 'Bebidas' },
    { option: 'Nachos' },
    { option: '20%' },
    { option: 'Bono' },
    { option: 'Tortillas' },
    { option: '15%', style: { fontFamily: 'Work Sans' } },
    { option: 'Postre' },
    {
        option: 'Jugar de nuevo',
        style: { fontSize: 12, },

    }
]

export default () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);


    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }
    return (
        <div className='h-screen flex justify-center items-center relative overflow-hidden'>

            <Wheel
                id='wheel'
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                innerRadius={36}
                backgroundColors={['#f29600', '#e73d13']}
                outerBorderWidth={0}
                radiusLineWidth={0}
                fontSize={18}
                textDistance={74}

                textColors={['#ffffff']}
                onStopSpinning={() => {
                    setMustSpin(false);
                }}


            />
            <button style={{
                fontFamily: 'Alfa Slab One',
                color: mustSpin ? 'gray' : '#1D202F'
            }} className=" text-xl absolute inset-0 m-auto w-[130px] h-[130px] rounded-full bg-white text-gray-800 " onClick={handleSpinClick}>Girar</button>

        </div>
    )
}