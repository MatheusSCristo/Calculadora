import React from 'react'
import { useSumContext } from '../../../context/sumContext';
import { useDisplayContext } from '../../../context/DisplayContext';

const Column4 = () => {
    const context = useSumContext()
    const { sum, setSum } = context || {}
    const contextD = useDisplayContext()
    const { display, setDisplay } = contextD || {}


    type Operator = {
        operator: string;
        display: string;
        show: string;
    }

    const operators: Operator[] = [{
        operator: "Divide",
        display: "src/assets/Divide.svg",
        show: "/"
    }, {
        operator: "Multiply",
        display: "src/assets/X.svg",
        show: "*"
    }, {
        operator: "Minus",
        display: "src/assets/Minus.svg",
        show: "-"
    }, {
        operator: "Plus",
        display: "src/assets/Plus.svg",
        show: "+"
    }, {
        operator: "Equals",
        display: "src/assets/Equals.svg",
        show: "="
    }]

    const handleOnClickButton = (item: Operator) => {
        const operators = ["/", "%", "*", "=", "-", "x","+"]
        switch(item.operator){
            case "Equals":
                if(setDisplay && sum ){
                setDisplay(eval(sum))
                }
                break;
            default:
                if (setSum && setDisplay) {
                    for (let operator of operators) {
                        if (sum?.includes(operator) && sum?.indexOf(operator)!==0){
                            if(display && display!==0){
                                setSum(`${display}${item.show}`)
                                setDisplay(0)
                            }
                        return
                    }
                }
                setSum((prev) => prev + item.show)
            }

        }
    }

    return (
        <div className='col-start-4 flex flex-col items-center '>
            {operators.map((item) => {
                if (item.operator === "Equals") {
                    return (
                        <div className='w-[60px] h-[60px] bg-lightPurple rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black hover:bg-[#691af2]'
                            key={item.operator}
                            onClick={() => handleOnClickButton(item)}>
                            <img src={item.display} className='w-50%' />
                        </div>
                    )
                }
                else {
                    return (
                        <div className='w-[60px] h-[60px] bg-darkPurple rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#6339A7]'
                            key={item.operator}
                            onClick={() => handleOnClickButton(item)}>
                            <img src={item.display} className='w-50%' />
                        </div>
                    )
                }
            })
            }
        </div>
    )
}

export default Column4