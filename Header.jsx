import React from "react";
import './Header.css'
const Header = ({headTitle, headerExpanded}) => {
    return (
        <div className="container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="headerimage"
                className={`headimage ${
                    headerExpanded ?
                        'headimage-expand' :
                        'headimage-shrink'}`} />
            
            <h1 className={`text ${
                    headerExpanded ?
                        'text-expand' :
                    'text-shrink'}`}>{headTitle}</h1>
         </div>
     )
}
 export default Header