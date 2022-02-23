


//=======================svg images =========//
import EllipseSvg from '../../public/icons/options-vertical.svg';
import PasswordShowSvg from '../../public/icons/eye-reveal.svg';

//=========import components ====================//
// import SortDropDown from '../dropdown/sortDropdown';



const Password = () => {
    return ( 
      
        <div className="password">

            <div className="password-container">


                <table className="password-table">

                    <thead  className="password-table-tbh">
                        <tr className="password-table-tbh-tr">
                            <td className='password-table-tbh-tr-td name'>Name</td>
                            <td className='password-table-tbh-tr-td folder'>Folder</td>
                            <td className='password-table-tbh-tr-td options'></td>
                        </tr>
                    </thead>

                    <tr className="password-item-tr">
                        <td className="password-item-td-name">
                            <span className="password-item-td-name-name">AWS AMAZON</span>
                            <span className='password-item-td-username'>kennethowusu@gmail.com</span>
                        </td>
                        <td className="password-item-td-folder">email</td>
                        <td className="password-item-td-options">
                         <button className='password-item-td-options-ellipse'>...</button>
                      
                        </td>
                    </tr>


                    <tr className="password-item-tr">
                        <td className="password-item-td-name">
                            <span className="password-item-td-name-name">AWS AMAZON</span>
                            <span className='password-item-td-username'>kennethowusu@gmail.com</span>
                        </td>
                        <td className="password-item-td-folder">email</td>
                        <td className="password-item-td-options">
                         <button className='password-item-td-options-ellipse'>...</button>
                      
                        </td>
                    </tr>



                    <tr className="password-item-tr">
                        <td className="password-item-td-name">
                            <span className="password-item-td-name-name">AWS AMAZON</span>
                            <span className='password-item-td-username'>kennethowusu@gmail.com</span>
                        </td>
                        <td className="password-item-td-folder">email</td>
                        <td className="password-item-td-options">
                         <button className='password-item-td-options-ellipse'>...</button>
                      
                        </td>
                    </tr>

                    <tr className="password-item-tr">
                        <td className="password-item-td-name">
                            <span className="password-item-td-name-name">AWS AMAZON</span>
                            <span className='password-item-td-username'>kennethowusu@gmail.com</span>
                        </td>
                        <td className="password-item-td-folder">email</td>
                        <td className="password-item-td-options">
                         <button className='password-item-td-options-ellipse'>...</button>
                      
                        </td>
                    </tr>




                  

                   


                </table>
              
            </div>{/*password-container*/}

            
        </div>
     );
}
 
export default Password;