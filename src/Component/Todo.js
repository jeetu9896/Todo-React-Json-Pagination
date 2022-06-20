import React from 'react'
import Tododata from './Tododata'
import Todoinput from './Todoinput'

export const Todo = () => {
    const [data,setdata] =React.useState([])
    const [page,setpage] =React.useState(1)
    const [loading,setloading] =React.useState(false)
    const [error,seterror] =React.useState(false)

    const [totalcount,settotalcount] = React.useState(0)

    const getdata = ()=> {
        setloading(true)
        fetch(`http://localhost:3001/todojson?_page=${page}&_limit=2`)
        .then((res) => {
            settotalcount(res.headers.get("X-Total-Count"))
            return res.json()
        }
        )
        .then((res) => setdata(res))
        .catch((err) => {

            seterror(true)
            setdata([])
        })
        .finally(() =>{
            setloading(false)
        })
    }
    React.useEffect(()=>{
        getdata()

    },[page])
    const adddata = (title) =>{
        setloading(true)
        const todoitem={
            title:title,
            status:false
        }
        fetch(`http://localhost:3001/todojson`,{
            method:"POST",
            body:JSON.stringify(todoitem),
            headers:{
                "content-type":"application/json"
            }
        })
        .then((res)=> res.json())
        .then((res) =>{
            getdata()
        })
        .catch((err) =>{
            seterror(true)
            setdata([])
        })
        .finally(() =>{
            setloading(false)
        })
    }
  return loading ? (<h1>loading...</h1>) : error ?(<h1>Error...</h1>) :<div>
  <Todoinput adddata={adddata} />
  <Tododata data={data} />
  <button onClick={() => setpage(page-1)} disabled={page===1}>previous</button>
  <button onClick={() => setpage(page+1)} disabled={page===Math.ceil(totalcount/2)}>next</button>
</div>

  
}
export default Todo
