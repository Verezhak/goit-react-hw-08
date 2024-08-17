import s from './Loader.module.css'
import { ThreeCircles } from 'react-loader-spinner';
const Loader = () => {
    return (
        <div className={s.loader}>
            <ThreeCircles
                visible={true}
                height="50"
                width="50"
                color="#CD00CD"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}
                }
                wrapperClass=""
            />
        </div>
    )
}

export default Loader
