import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [ShippingToggle, setShippingToggle] = useState(false)
  const [paymentToggle, setPaymentToggle] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const cart = useSelector(state=> state.cart)
  const [ShippingInfo, setShippingInfo]= useState({
    address: '' ,
    city: '' ,
    zip: ''
  })

 const navigate= useNavigate()
  const handleOrder= ()=> {
const newOrder={
  products: cart.products ,
  orderNumber : "12344",
  shippingInformation: ShippingInfo,
  totalPrice: cart.totalPrice
}
setOrder(newOrder)
navigate('/order-confirmation')
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between"
            onClick={()=> setBillingToggle(!billingToggle)}>
              
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ?  <FaAngleDown /> : <FaAngleUp/>}
             
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
            
            <div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Phone #"
                  type="text"
                />
              </div>
            </div>
            </div>
          </div>



          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between"
            onClick={()=> setShippingToggle(!ShippingToggle)}>
              
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {ShippingToggle ?  <FaAngleDown /> : <FaAngleUp/>}
             
            </div>
            <div className={`space-y-4 ${ShippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Address
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Name"
                  type="text"
                  onChange={(e)=> setShippingInfo({...ShippingInfo, address: e.target.value})}
                />
              </div>
            
            <div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  City
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Email"
                  type="text"
                  name="city"
                  onChange={(e)=> setShippingInfo({...ShippingInfo, city: e.target.value})}
                />
              </div>
            </div>
            <div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Zip Code
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Phone #"
                  type="text"
                  name="zip"
                  onChange={(e)=> setShippingInfo({...ShippingInfo, zip: e.target.value})}
                />
              </div>
            </div>
            </div>
          </div>


          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between"
            onClick={()=> setPaymentToggle(!paymentToggle)}>
              
              <h3 className="text-lg font-semibold mb-2">
                Payment Method
              </h3>
              {paymentToggle ?  <FaAngleDown /> : <FaAngleUp/>}
             
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="Payment"
                  checked={paymentMethod === "cod"}
                  onChange={()=> setPaymentMethod("cod")}
                />
                  <label className="block text-gray-700 ml-2" >Cash On Delivery</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="Payment"
                  checked={paymentMethod === "dc"}
                  onChange={()=> setPaymentMethod("dc")}
                />
                  <label className="block text-gray-700 ml-2" >Debit Card</label>
              </div>
              {paymentMethod === "dc" &&(
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                    <input type="text"
                     placeholder="Enter Card Number"
                     className="border p-2 w-full rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Card Holder Name</label>
                    <input
                     className="border p-2 w-full rounded" 
                     required
                     placeholder="Enter Card holder name"
                     type="text" />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2"> 
                      <label className="block text-gray-700 font-semibold mb-2">Expire Data</label>
                      <input
                       type="text" 
                       placeholder="MM/YY" 
                       className="border p-2 w-full rounded"
                       required/>
                    </div>
                    <div className="w-1/2 ml-2">
                    <label className="block text-gray-700 font-semibold mb-2">CVV </label>
                    <input type="text" placeholder="CVV"
                    className="border p-2 w-full rounded"
                    required/>
                    </div>

                  </div>
                </div>
              ) }
            </div>
          </div>
        </div>



        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibild mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cart.products.map((product)=>(
            <div key={product.id} className="flex justify-between">
              <div className="flex items-center">
                <img className="w-16 h-16 object-contain rounded" src={product.image} alt="" />
                <div className="ml-4 ">
                  <h4 className="text-md font-semibold">{product.name}</h4>
                  <p className="text-gray-600">
                    ${product.price} x {product.quantity}
                    </p>
                </div>
              </div>
              <div className="text-gray-800">
                ${product.price * product.quantity}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between">
            <span>Total Price:</span>
            <span className="font-semibold">
              ${cart.totalPrice.toFixed(2)}
              </span>
          </div>
        </div>
        <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
       onClick={handleOrder} >
          Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
