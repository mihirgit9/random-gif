import Random from "./Components/Random";
import Tag from "./Components/Tag";

export default function App() {
  return (
    <div className=" w-full min-h-screen bg-yellow-300 py-6 overflow-x-hidden">
      <h1 className="w-[80%] mx-auto text-center bg-cyan-500 text-white
      rounded-md my-6 py-2 text-xl font-bold tracking-wider">RANDOM GIFS</h1>
      <div className="w-[80%] mx-auto flex flex-col items-center gap-8">
        <Random/>
        <Tag/>
      </div>
    </div>
   
  )
}
