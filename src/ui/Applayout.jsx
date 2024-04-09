import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import {Outlet, useNavigation} from 'react-router-dom'
import Loader from "./Loader"

const Applayout = () => {
  const navigation  = useNavigation()
  const isLoading  = navigation.state === 'loading'

  return (
    <div className="layout">
      {isLoading && <Loader/>}
        <Header/>
        <main>
            <Outlet/>
        </main>
        <CartOverview/>
    </div>
  )
}

export default Applayout