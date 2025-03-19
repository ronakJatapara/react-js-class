import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { Navigate, useNavigate } from 'react-router'
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { deleteDoc } from 'firebase/firestore'


export default function Dashboard() {
  const [uid, setuid] = useState(null)
  const [userdata, setuserdata] = useState("")
  const [task, settask] = useState("")
  const [priority, setpriority] = useState("")
  const [record, setRecord] = useState([])
  const [editIndex,seteditIndex] = useState(null)
  const nav = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuid(user.uid)
      }
      else {
        setuid(null)
      }
    }, [uid])
  })

  useEffect(() => {
    if (uid) {
      fetchuser();
      fetchData();
    }
  }, [uid])

  const fetchuser = async () => {
    await getDoc(doc(db, "users", uid))
      .then((data) => {
        setuserdata(data.data().name)
      })
      .catch((err) => {
        console.log(err);

      })
  }

  const fetchData = async () => {
    await (getDocs(collection(db, "tasks")))
      .then((res) => {
        let data = res.docs.map((el, i) => {
          // return {taskid: el.id, ...el.data()};
          return {taskId: el.id, ...el.data()}
        })
        setRecord(data);
        

      })
  }


  const handleDelete = async (docid) => {
    console.log(docid);
    await deleteDoc(doc(db, "tasks", docid))
      .then((res) =>{
        let data = record.filter((res) => res.taskId != docid);
        setRecord(data)
      })
  }
  const handleEdit = (docid)=>{    
    let singleData = record.find((el) => el.taskId === docid);
   console.log(singleData);
   
   settask(singleData.task)
   setpriority(singleData.priority)
   seteditIndex(singleData.taskId)
  }
  const addtask = async () => {

    if(editIndex == null){
    await (addDoc(collection(db, "tasks"), { userId: uid, task, priority }))
      .then((res) => {
        setRecord([...record, {taskId: res.id, task, priority}]);
      })
    }
    else{
      await updateDoc(doc(db,"tasks",editIndex),{task,priority}).then(()=>{
        fetchData()
      })
    }
  }
  
  return (
    <div>
      <h2>{uid}</h2>
      <h1>{userdata}</h1>
      <input type="text" value={task} placeholder='enter task' onChange={(e) => settask(e.target.value)} /><br></br>
      <select value={priority} id="" onChange={(e) => setpriority(e.target.value)}>
        <option hidden value="">select priority</option>
        <option value="high">higher</option>
        <option value="medium">midium</option>
        <option value="low">low</option>

      </select>
      <button onClick={addtask}>add task</button>
      <ol>
      {
        record && record.map((el, i) => {
           return <div key={i}>
            <li>{el.task} - {el.priority} <button onClick={(e)=>handleDelete(el.taskId)}>delete</button><button onClick={(e)=>handleEdit(el.taskId)}>edit</button></li>
            
          </div>
        })
      }
      </ol>
    </div>
  )
}