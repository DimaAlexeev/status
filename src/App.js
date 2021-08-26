
import './App.css';
import { useEffect, useState } from 'react';
import { getCities } from './getUrl';
import Status from './status'
import {Context} from './Context'
import Form from './Form'
function App() {
 
  const [cityes, setCityes] = useState([])
  const [form, setForm] = useState(
    {
      city: { value: "" },
      pass: { value: "", error: false },
      twoPass: { value: "", error: false },
      mail: { value: "", error: false },
      check: false
    }
  )
  useEffect(() => {
    getCities().then((json) => {
      let data = json.sort().filter((item => item.population > 50000));
      let maxIndex = data.reduce((acc, curr, i) => Number(data[acc].population) > Number(curr.population) ? acc : i, 0);
      data.unshift(...data.splice(maxIndex, 1));
      setCityes(data)
      setForm({ ...form, city: { value: data[0].city } })
    });
     
  }, [])
 
   if ( cityes.length=== 0) {
    return (<h1>Загрузка...</h1>)
  } 
 
    return (
      <Context.Provider value={{form,setForm,cityes}}>
        <div className="container containerNew">
          <Status />
          <Form />
        </div>
      </Context.Provider>
      

    );
  
}

export default App;
