import { useState } from "react"


const TabCard = ({apiData}) => {
    const [containerTab,setContainerTab] = useState(0)
  return (
    <main>
        {
            apiData.map((items,index) => {
                return(
                    <button key={items.id} className="button" onClick={() => setContainerTab(index) } >{items.lable}</button>
                    
                    
                )
            } )
           
        }
        <div className="container">{apiData[containerTab].content}</div>
    </main>
  )
}

export default TabCard