import LoaderImg from './assets/img/loader.gif';

function Loader() {
    return <div className="loader">
        <img src={LoaderImg} alt="loader" width={100} height={100} />
        <span>Loading...</span>
    </div>
}

export default Loader;
