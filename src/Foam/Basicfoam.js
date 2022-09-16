import React,{useState} from 'react'

function Basicfoam() {
    const [email, setEmail] = useState("");

    const [password, setpassword] = useState("");
     e.preventDefault();

    const [allEntry, setAllEntry] = useState([]);
    const submitFoam = () => {
        const newEntry = {email: email, password: password};
        SetAllEntry([...allEntry,newEntry]);
    }
  return (
    <>
    <foam  action="" onSubmit ={submitFoam}>
        <div>
        <label htmlfoam="email">Email</label>
        <input type="text" name='email'id='email' autoComplete='"off' 
               value="email"
               onChange={(e) => setEmail(e.target.value)}
               />
              
        </div>
        <div>
        <label htmlfoam="password">password</label>
        <input type="text" name='password'id='password' autoComplete='"off'
          value="passeord"
          onChange={(e) => setpassword (e.target.value)}
        /> 
        </div>
        <button type='submit'>Login</button>
    </foam>
    <div>
        {
            allEntry.map (() => {
                return (
                    <></>
                        )
                                })

            
        }
     </div>
    </>
  )
}

export default Basicfoam