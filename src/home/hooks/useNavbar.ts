import { useState, useEffect } from 'react';

//* Controla cuantos TaskIcon mostrar según el width/height

export const useNavbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [maxAmount, setMaxAmount] = useState(1);
  
    window.onresize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(
        () => {
            
            //* Calcula cuantos TaskIcon mostrar según el width de la pantalla
            if (width <= 350) return setMaxAmount(1)
            if (width <= 400) return setMaxAmount(2)
            if (width <= 450) return setMaxAmount(3)
            if (width <= 500) return setMaxAmount(4)
            if (width <= 600) return setMaxAmount(5)
            if (width <= 700) return setMaxAmount(6)
            if (width <= 750) return setMaxAmount(7)

            //* Aquí ya estaría en versión desktop entonces calculo segun el height
            if (height >= 1000) return setMaxAmount(13)
            if (height >= 900) return setMaxAmount(10)
            if (height >= 800) return setMaxAmount(9)
            if (height >= 700) return setMaxAmount(8)
            if (height >= 600) return setMaxAmount(6)
       
        }, [width, height]
    )

    return maxAmount;

}