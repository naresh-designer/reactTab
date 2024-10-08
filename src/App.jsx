// import { useEffect,useState } from "react"
import TabCard from "./TabCard"

const apiData = [
  {
    lable:'name',
    content:<div>dksd</div>
  },
  {
    lable:'same',
    content:<div>12</div>
  }
]

const App = () => {

  // const [apiData,setApiData] = useState([])

  


  // const fetchData = async() => {
  //   const res = await fetch (`https://api.escuelajs.co/api/v1/users`)
  //   const data = await res.json()
  //   setApiData(data)
    
  // }

  // useEffect(() => {
  //   fetchData()
  // },[] )

  return (
    <main className="wrapper" >
      <TabCard apiData={apiData} />
    </main>
  )
}

export default App