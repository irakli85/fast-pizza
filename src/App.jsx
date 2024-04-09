import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Error from "./ui/Error"
import Menu, {loader as menuLoader} from "./features/manu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
import Order, { loader as orderLoader } from "./features/order/Order"
import Applayout from "./ui/Applayout"


const router = createBrowserRouter([
  { 
    element: <Applayout/>,
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/menu', element: <Menu/>, loader: menuLoader,  errorElement: <Error/>},
      {path: '/cart', element: <Cart/>},
      {path: '/order/new', element: <CreateOrder/>, action: createOrderAction},
      {path: '/order/:orderId', element: <Order/>, loader: orderLoader, errorElement: <Error/> }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
