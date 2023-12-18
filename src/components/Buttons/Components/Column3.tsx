import React from 'react'
import { useSumContext } from '../../../context/sumContext'
import { useDisplayContext } from '../../../context/DisplayContext'

const Column3 = () => {
    const context = useSumContext()
    const { sum, setSum } = context || {}
    const contextD = useDisplayContext()
    const { display,setDisplay} = contextD || {}

    type Button = {
        button: string;
        display: string;
    }

    const Buttons: Button[] = [{
        button: "Rest",
        display: "%"
    }, {
        button: "9",
        display: "9"
    }, {
        button: "6",
        display: "6"
    }, {
        button: "3",
        display: "3"
    }, {
        button: ",",
        display: "."
    }]


    const handleOnClickButton = (item: Button) => {
        const operators = ["/", "%", "+", "=", "-", "x"]
        if (setSum && sum && setDisplay)
            switch (item.button) {
                case "Rest":
                    for (let operator of operators) {
                        if (sum?.includes(operator))
                            return
                    }
                    setSum((prev) => prev + item.display)
                    break;


                case ",":
                        setSum((prev) => prev + item.display)
                        break;
                    

                default:
                    if ((sum[0] === "0" && sum[1]!==".") || display !== 0) {
                        setSum(item.button)
                        setDisplay(0)
                    }
                    else{
                        setSum((prev) => prev + item.display)
                    }
                    break;
            }
    }



    return (
        <div className='col-start-3 flex flex-col items-center'>
            {Buttons.map((item) =>
                <div className='w-[60px] h-[60px] bg-background rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#2b2738]'
                    key={item.button}
                    onClick={() => handleOnClickButton(item)}>
                    <span className='text-2xl text-white'>{item.display}</span>
                </div>
            )
            }
        </div>
    )
}

export default Column3