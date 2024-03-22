import { useState } from "react"
import Data from "../assets/Data"
import AddIcon from '@mui/icons-material/Add';


const Users = ({Active}) => {

  const [user, setUser] = useState('')

  const [visible, setVisible] = useState(false)

    const add =()=>{
      Data.push({"name" : user})

      setUser('')

      setVisible(false)
    }

  return (
    <div className="flex flex-col md:w-[30%] gap-2 border-r-[1px] text-white bg-[#F8F9FA]">

      <div className="flex w-full p-10 justify-between items-center gap-5">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/187/079/small/chart.png" alt="" className="w-10" />
        <button onClick={()=>setVisible(!visible)} className="border-[1px] rounded-lg bg-slate-500">
          <AddIcon className="text-white"/>
        </button>
      </div>


    {visible &&
    <div className="flex flex-col items-center gap-2 p-2">
      <input type="text" onChange={(e)=>setUser(e.target.value)} className="border-[1px] w-full text-slate-700"/>
      <button onClick={add} className="bg-slate-700 p-1 w-[50%] rounded-md"> add</button>
    </div>
    }

      <div className="flex flex-col gap-10 p-[5%] h-full overflow-scroll">     
        {Data.map((item,index)=>(
            <button key={index} onClick={()=>Active(index)} className="bg-slate-500 flex items-start px-[20%] py-2 rounded-lg"> 
                <p>{item.name}</p>
            </button>
        ))}
      </div>
    </div>
  )
}

export default Users