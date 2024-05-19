import './Wraper.css'
const Wraper = ({ children }) => {
    return (
        <div className="wraper">
        {children}
        </div>
    );
    };

export default Wraper;