 import {Fragment,useState, memo} from 'react'
 const Status = ()=>{
    const [statusName, setStatus] = useState("Прежде чем действовать, надо понять")
    const [inputStatus, setInputStatus] = useState(false);
    return(
        <Fragment>
                <div className="row">
                    <div className="col-7">
                        <span className="HeadFirstWord">Здравствуйте,</span>
                        <span className="HeadUserName">Человек №3596941</span>
                    </div>

                    <div className="col-5 ">
                    <a href="#" onClick={() => { setInputStatus(!inputStatus) }} className="newStatus">Сменить статус</a>
                    </div>
                </div>
                <div className="row">
                    <div className="formLinePanel ">
                        <label className="formLabel"></label>
                        <div className="arrow">
                            {inputStatus ? <NewStatus
                            statusName={statusName}
                            setInputStatus={setInputStatus}
                            setStatus={setStatus}
                            /> : statusName}
                        </div>
                    </div>
            </div>
  </Fragment>
    
    );

}
const NewStatus = ({ statusName, setStatus, setInputStatus }) => {
    let line = statusName;
    const data = (item) => {
      line = item.target.value;
    }
    return (
      <>
        <input className="formInput" type="text" onChange={data} defaultValue={statusName} />
        <button className="formBtnStatus" onClick={() => {
          setStatus(line)
          setInputStatus(false)
        }}>Сохранить</button>
      </>
    );
  }

 export default memo(Status);