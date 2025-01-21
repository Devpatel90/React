import { useState } from 'react'
import sty from './App.module.css'

function App() {
  const [state,setState] = useState({
      name : "",
      email : "",
      skill : [""]
  })

  const handleadd = ()=>{
    setState({
     ...state,
     skill : [...state.skill,""]
    })
 }

 const handleDelete = (index) => {
  const updatedSkills = state.skill.filter((_, i) => i !== index); // Remove the skill at the given index
  setState({ ...state, skill: updatedSkills }); // Update the state
};

 const handleChange = (e)=>{
   const {name,value} = e.target
   if(isNaN(name)){
   setState({...state,[name] : value})
   }else{
      let arr = [...state.skill]
      arr[name] = value
      setState({...state,skill : arr})
   }
 }

 console.log(state);

  return (
    <>
      <div className={sty.form1}>
        <form action="">
          <input type="text" placeholder='Name' name="name"  onChange={handleChange} className={sty.inputf} /><br /><br />  
          <input type="text" name="email" id="" placeholder='Email' onChange={handleChange} className={sty.inputf} /><br /><br />
          <input type="button" name="" value={"Add-Skill"} onClick={handleadd} id="" className={sty.addb} /><br/><br/>
          <div className={sty.skillli}>
          {
          state.skill.map((el,index)=>{
            return <>
            <div className={sty.skillit}>
                <input  type='text' name={index} placeholder='Skills' onChange={handleChange}/>
                <input type="button" value={"Delete"} className={sty.deleteb} onClick={() => handleDelete(index)} /><br/><br/>
            </div>
          </>
          })
        }
        </div>
        </form>
      </div>
    </>
  )
}

export default App
