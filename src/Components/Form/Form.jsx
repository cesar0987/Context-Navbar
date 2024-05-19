import './Form.css';
const Form = ({ userInfo,setUserInfo }) => {
    return (
        <form>
            <label>Your Name: </label>
            <input type="text" onChange={e => setUserInfo({...userInfo, name: e.target.value})}/>
        </form>
    );
}

export default Form;