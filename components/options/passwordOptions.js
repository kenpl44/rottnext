import { useContext } from 'react';
import { PasswordContext } from '../../contexts/PasswordContext';


//===========import svg images====================//
import DeleteSvgImage from '../../public/icons/options/options-delete.svg';
import ShareSvgImage from '../../public/icons/options/options-share.svg';




const PasswordOptions = () => {
    

//============import contexts===================//
const {
        getPasswordConfirmation,
        getSharePasswordModal
    }
         = useContext(PasswordContext);





    return ( 
        <div className="editPassOptions" >
            <button onClick={getPasswordConfirmation} type="button" className="editPassOptions-btn-delete">
                <DeleteSvgImage/>
            </button>
            <button onClick={getSharePasswordModal} type="button" className="editPassOptions-btn-share">
                <ShareSvgImage/>
            </button>

        </div>
     );
}
 
export default PasswordOptions;
