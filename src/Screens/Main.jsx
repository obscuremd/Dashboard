import { data } from "autoprefixer"
import Data from "../assets/Data"
import { useState } from "react"



const Main = ({number}) => {

    const [doc, setDoc] = useState("")
    const [date, setDate] = useState("")

    const selectedData = Data[number]?.mods || []
    const selectedName = Data[number]?.name || ""

    const [formVisible, setFormVisible] = useState(false)
    const [selectedDocIndex, setSelectedDocIndex] = useState(null)
    const [buttonVisible, setButtonVisible] = useState(false)

    const add =()=>{
         // Create a new document object
         const newDoc = {
            docs: doc,
            date: date
        };
        // Update the state by creating a new array with the new document added
        const updatedData = [...selectedData, newDoc];
        // Set the updated data
        Data[number].mods = updatedData;
        // Clear input fields
        setDoc("");
        setDate("");

        setFormVisible(false)
    }

  return (
    <div className="w-full h-full flex">
        {/* form */}
        {
            formVisible && 
        <div className="absolute w-full h-full bg-[#00000031] flex flex-col gap-4 pt-12 px-[5%] z-20">
            <div className="flex flex-col gap-10 bg-white p-3 md:w-[50%] rounded-lg">
                <div className="font-bold self-center">UPLOAD FILE</div>
                <input type="text" placeholder="doc" onChange={(e)=>setDoc(e.target.value)}/>
                <input type="text" placeholder="date" onChange={(e)=>setDate(e.target.value)}/>
                <button onClick={add} className="bg-blue-400 p-2 rounded-lg" >add</button>
            </div>
        </div>
        }

        {/* body */}
        <div className="w-full">
            <div className=" relative flex bg-[#F8F9FA] justify-end p-5">
                    <button className=" p-2 bg-slate-400 rounded-lg text-white font-bold" onClick={()=> setFormVisible(!formVisible)}>+ New</button>
            </div>
            <div className="p-5 font-bold capitalize">{selectedName}</div>
            <div className="flex pl-3 gap-10 p-4 border-b-2 items-center bg-[#F8F9FA]">
                <p className="md:w-[50%] w-[25%] font-bold">NAME</p>
                <p className="font-bold">DATE</p>

                
            </div>
            {selectedData.map((item, index)=>(
                <div key={index} className="flex pl-3 gap-10 p-4">
                    <p className="md:w-[50%] w-[25%]">{item.docs}</p>
                    <p className="md:mr-[10%] w-[20%]">{item.date}</p>
                    <div className="relative">
                        <button onClick={()=>[setSelectedDocIndex(index), setButtonVisible(!buttonVisible)]} className="bg-slate-400 p-2 rounded-lg flex-wrap justify-center items-center">...doc</button>


                        {selectedDocIndex == index && buttonVisible &&
                            <div className="flex flex-col bg-[#F8F9FA] p-2 gap-2 rounded-lg absolute z-10">
                                <button className="border-b-[1px] hover:bg-[#d7d7d7] p-2 rounded-lg">Download</button>
                                <button className="border-b-[1px] hover:bg-[#d7d7d7] p-2 rounded-lg">Preview</button>
                                <button className="border-b-[1px] hover:bg-[#d7d7d7] p-2 rounded-lg">Rename</button>
                                <button className=" hover:bg-[#d7d7d7] p-2 rounded-lg">Delete</button>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Main