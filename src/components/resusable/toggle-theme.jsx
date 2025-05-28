import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { MdLightMode, MdNightlight } from 'react-icons/md';

const ToggleTheme = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const toggle = () => {
        dispatch(toggleTheme());
    }

    return (
        <div>
            {theme == 'dark' ?
                <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                    <MdLightMode className="text-gray-500" />
                </div>
                :
                <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                    <MdNightlight className="text-gray-500" />
                </div>
            }
        </div>
    )
}


export default ToggleTheme;