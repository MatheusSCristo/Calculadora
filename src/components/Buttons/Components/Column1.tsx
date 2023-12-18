import { useSumContext } from '../../../context/sumContext'
import { useDisplayContext } from '../../../context/DisplayContext'

const Column1 = () => {

    const context = useSumContext()
    const { sum, setSum } = context || {}
    const contextD = useDisplayContext()
    const { display,setDisplay } = contextD || {}


    type Button = {
        button: string;
        display: string;
    }

    const Buttons: Button[] = [{
        button: "ClearLast",
        display: "CE"
    }, {
        button: "7",
        display: "7"
    }, {
        button: "4",
        display: "4"
    }, {
        button: "1",
        display: "1"
    }, {
        button: "PlusMinus",
        display: "src/Assets/PlusMinus.svg"
    }]


    const handleOnClickButton = (item: Button) => {
        const operators = ["/", "%", "*", "=", "-", "x", "+"]
        if (setSum && sum && setDisplay)
            switch (item.button) {
                case "PlusMinus":
                    setSum((prev) => `${-1 * parseInt(prev)}`)
                    break;

                case "ClearLast":
                    for (let i = 0; i < operators.length; i++) {
                        if (sum.includes(operators[i])) {
                            setSum((prev) => prev.slice(0, prev.indexOf(operators[i])))
                            setDisplay(0)
                            return
                        }
                    }
                    setSum("0")
                    break;
                default:
                    if ((sum[0] === "0" && sum[1]!==".") || display !== 0) {
                        setSum(item.button)
                        setDisplay(0)
                    }
                    else {
                        setSum((prev) => prev + item.button)
                    }
                    break;
            }
    }



    return (
        <div className='col-start-1 flex flex-col items-center'>
            {Buttons.map((item) =>
                <div className='w-[60px] h-[60px] bg-background rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#2b2738]'
                    key={item.button}
                    onClick={() => handleOnClickButton(item)}>
                    {item.button !== "PlusMinus" ? <span className='text-2xl text-white'>{item.display}</span> : <img src={item.display} />}
                </div>
            )
            }
        </div>
    )
}


export default Column1