import { useContext,useState } from "react";
import { Context } from "./Context";
const setInputForm = (setForm,value) => {
    
    setForm((state) => ({
          ...state,
          ...value
        })
      )

}
const Form = () => {
    const {form, setForm,cityes } = useContext(Context)
    console.log(form)
    const [recentСhanges,setRecentСhanges] = useState("последние изменения 15 мая 2012 в 14:55:17")
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className="botLine formLine" >
                <label className="formLabel">
                    Ваш город
                </label>
                <select className="formInput" onChange={(item) => {
                    setInputForm(setForm, {city:{ value: item.target.value}} )
                }
                }>
                    {cityes.map((val, key) => (
                        <option key={key} value={val.city}> {val.city} </option>
                    ))
                    }
                </select>
            </div>
            <div className="formLine">
                <label className="formLabel">Пароль</label>
                <input className={form.pass.error ? "formInput error" : "formInput"} type="password" onChange={(item) => {
                    setInputForm(setForm, { pass:{ value: item.target.value, error: form.pass.error }})
                    
                }
                } />
                <label className="errorText">{form.pass.error}</label>
                <span className="formHint">Ваш новый пароль должен содержать не менее 5 символов.</span>
            </div>

            <div className="formLine botLine br-top" >
                <label className="formLabel">Пароль еще раз</label>
                <input className={form.twoPass.error ? "formInput error" : "formInput"} type="password" onChange={(item) => {
                   setInputForm(setForm, {twoPass:{ value: item.target.value, error: form.twoPass.error }} )
                    
                }
                } />
                <label className="errorText">{form.twoPass.error}</label>
                <span className="formHint">Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</span>
            </div>

            <div className="formLine " >
                <label className="formLabel"> Электронная почта</label>

                <input className={form.mail.error ? "formInput error" : "formInput"} type="email" onChange={(item) => {
                    setInputForm(setForm, {mail:{ value: item.target.value, error: form.mail.error }})
                     
                }
                } />
                <label className="errorText">{form.mail.error}</label>
                <span className="formHint">Можно изменить адрес, указанный при регистрации. </span>
            </div>
            <br />
            <div className="formLine" >

                <label className="formLabel">  Я согласен</label>

                <div className="">
                    <input type="checkbox" onChange={(item) => {
                        setInputForm(setForm, {check:item.target.checked})
                    }
                    } />
                    <span className="formAcceptIinformation">принимать актуальную информацию на емейл</span>
                </div>

            </div>

            <br />
            <div className="row " >
                <div className="col-3">
                    <label className="formLabel">  </label>
                </div>
                <div className="col-4 d-flex">
                    <button className="formBtn" onClick={() => setValidForm(form, setForm, setRecentСhanges)}>
                        Изменить
                    </button>
                    <span className="recentСhanges">{recentСhanges}</span>
                </div>

            </div>

        </form>)
}
const setValidForm = (form, setForm,setRecentСhanges) => {
    let request = true
    if (form.pass.value.length < 5) {
      request = false
      setForm((state) => ({ ...state, pass: { value: state.pass.value, error: "Используйте не менее 5 символов" } })
      )
    }
    else { setForm((state) => ({ ...state, pass: { value: state.pass.value, error: "" } })) }
  
    if (form.pass.value !== form.twoPass.value) {
      request = false
      setForm((state) => (
        { ...state, twoPass: { value: state.twoPass.value, error: "Пароли не совпадают" } }
      ))
    }
    else {
      setForm((state) => ({ ...state, twoPass: { value: state.twoPass.value, error: "" } }))
    }
  
    if(form.mail.value!=""){
      if (!/^.-*?@\w+\.\w{2,5}$/.test(form.mail.value)) {
  
        setForm((state) => ({ ...state, mail: { value: state.mail.value, error: "" } }))
      }
      else {
        request = false
        setForm((state) => ({ ...state, mail: { value: state.mail.value, error: "Неверный E-mail" } }))
      }
    }else{
        request = false
        setForm((state) => ({ ...state, mail: { value: state.mail.value, error: "Неверный E-mail" } }))
    }
      
    const getUrl = {
      city:form.city.value,
      pass:form.pass.value,
      mail:form.mail.value,
      check:form.check
    }
  
    if (request) {
      console.log("Отправка формы", getUrl)
      setRecentСhanges((state)=>recentСhanges())
    }
     
  }

  const recentСhanges=()=>{
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ]
    const d = new Date();
    const year = d.getFullYear();
    const date = d.getDate()  ;
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex]
    const hours = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    return `последние изменения ${date} ${monthName} ${year} в ${hours}:${min}:${sec}`  
  }
export default Form;