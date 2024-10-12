import categoryMan from "../assets/images/man.png"
import categoryWoman from "../assets/images/woman.png"
import categoryKids from "../assets/images/kid.png"
const CategorySection = () => {
    const category=[
        {
            title: "Men",
            imgUrl: categoryMan
        },
        {
            title: "Women",
            imgUrl: categoryWoman
        },
        {
            title: "Kids",
            imgUrl: categoryKids
        },
    ]

  return (
    <div className="container mx-auto grid grid-cols-1 sm: grid-cols-3 gap-6 ">
{category.map((ele,index)=>(
    <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105
    cursor-pointer">
        <img src={ele.imgUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
        <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{ele.title}</p>
            <p className="text-gray-600">View All</p>
        </div>


    </div>
))}
    </div>
  )
}

export default CategorySection