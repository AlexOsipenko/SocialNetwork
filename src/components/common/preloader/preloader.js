import loader from "../../Users/Loader.module.css";

let Preloader = (props) => {
    return (
        <div className={loader.preloader}>
            <div className={loader.spinner}></div>
        </div>)
}
export default Preloader
