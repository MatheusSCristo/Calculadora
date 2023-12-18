import Column4 from './Components/Column4'
import Column3 from './Components/Column3'
import Column2 from './Components/Column2'
import Column1 from './Components/Column1'

const Buttons = () => {
  return (
    <div className='grid grid-rows-5 grid-cols-4 mt-4'>
        <Column1/>
        <Column2/>
        <Column3/>
        <Column4/>
    </div>
  )
}

export default Buttons