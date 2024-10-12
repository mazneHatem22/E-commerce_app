

const Register = ({openLogin}) => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input className="w-full px-3 py-2 border" type="text" placeholder="Enter Name" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input className="w-full px-3 py-2 border" type="password" placeholder="Enter Password"/>
            </div>
            <div  className="mb-4">
                <button type="submit" className="w-full text-red-600 text-white py-2">Sign Up</button>
            </div>
        </form>
        <div className="text-center ">
            <span className="text-gray-700  mx-2">Already have an Account?</span>
            <span className="text-red-800 cursor-pointer" onClick={openLogin}>Login </span>
        </div>
    </div>
  )
}

export default Register