import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { useContext } from "react"

const Remainder = () => {
   const remainderList = useSelector(state => state.remainder.myList)
    return(
        <div>
         <Header/>
         <p></p>
        </div>
    )
}

export default Remainder