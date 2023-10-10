

export default function Forgoat() {
  return (
<div className=" w-full flex flex-col items-center ">
<form className="w-11/12  md:w-7/12 lg:w-5/12 flex-col-center border-2 bg2 border-orange-500 rounded-[40px] md:text-xl text-md">
  <span className="text-orange-500 vazir-bold text-3xl md:text-4xl mt-10">
    فراموشی کلمه عبور
  </span>
  <label
    className=" w-full text-right mr-14 md:mr-28 text-white text-xl vazir-bold mb-3 mt-10"
    htmlFor="#username"
  >
    : ایمیل
  </label>
  <input
    className="w-[85%] h-12 rounded-2xl mb-5 border-4 border-orange-500 focus:outline-0 px-4 text-xl "
    id="username"
    type="email"
  />
  <label
    className=" w-full text-right mr-14 md:mr-28  text-white text-xl vazir-bold mb-3"
    htmlFor="#number"
  >
    : شماره تماس
  </label>
  <input
    className="w-[85%] h-12 rounded-2xl mb-5 border-4 border-orange-500 focus:outline-0 px-4 text-xl"
    id="number"
    type="text"
  />
  <input
    className="py-2 px-6 mb-5 bg-white rounded-3xl  text-xl vazir-bold cursor-pointer border-4 border-orange-500"
    type="submit"
    value={"کدتایید"}
  />
</form>
</div>
  )
}
