import Form from "../Form/Form";
const FormWraper = ({userInfo,setUserInfo}) => {
    return (
        <Form userInfo={userInfo} setUserInfo={setUserInfo}/>
    );
}
export default FormWraper;