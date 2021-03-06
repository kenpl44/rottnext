import { useEffect,useState,useContext } from "react";
import { PasswordContext } from "../../contexts/PasswordContext";




//===================import components===============
import FolderList from '../folder/FolderList';
import TogglePasswordEye from "../TogglePasswordEye";





const AddPasswordModal = () => {
    //=========import contexts==============//
    const {passValErr,addPassword,setShowAddPasswordModal,folderId} = useContext(PasswordContext);
    
    const api = process.env.NEXT_PUBLIC_API;
    const [url,setUrl] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    

    const newPassword = {
        url,
        name,
        username,
        password,
        folder_id:folderId,
    }

    const addPasswordModal = (e)=>{
        e.preventDefault();
        addPassword(newPassword,setUrl,setName,setUsername,setPassword);
       
        
    }
 


    const hideAddPasswordModal = ()=>{
        setShowAddPasswordModal(false);
    }
  
    return ( 
        <div className="modal" id="addPasswordModal" onClick={hideAddPasswordModal}>
            <div className="modal-container">

                
                {/* modal-content */}
                <form className="modal-content" onClick={(e)=>e.stopPropagation()} onSubmit={addPasswordModal} >

                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Add Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body ">
                        <div   className="scroll-beautify flex h-full flex-col p-8"
                        
                        style={{
                            paddingBottom:"50px"
                        }}>
                        
                        

                         
                              <div id="valErr" style={{color:"red",padding:"0 0px  15px 150px","fontSize":".9rem","fontWeight":"bold"
                            
                              }}>{passValErr}</div>

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Url</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text" 
                                    value={url} onChange={(e)=>setUrl(e.target.value)}
                                    />
                                </div>
                                
                              </div>

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Name</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text" 
                                      value={name} onChange={(e)=>setName(e.target.value)}
                                    />
                                </div>
                                
                              </div>

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Username</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text"  
                                    value={username}onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                                
                              </div>
                      
                              <div className="modal-form-group relative">
                                <label htmlFor="" className="mr-5 ">Password</label>
                                <div>
                                    <input className="tbox  tbox__border " type="password"
                                    value={password}  onChange={(e)=>setPassword(e.target.value)} />
                                    {/*Toggle Eye Password Component*/}
                                    <TogglePasswordEye/>
                                </div>
                                
                              </div>

                              {/* FolderList Component*/}
                              <div className="folder modal-form-group">
                                <FolderList/>
                              </div>
                          
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                        

                        <div className="flex w-full h-full justify-end items-center pr-4">
                            <button type="button" className="btn btn__grey mr-3" onClick={hideAddPasswordModal}>Cancel</button>
                            <button type="submit"   className="btn btn__leave justify-self-start"
                            >Save</button>
                        </div>
                    {/* modal footer */}


                    </div>
               
                </form>
  


            </div>
        </div>
     );
}
 
export default AddPasswordModal;