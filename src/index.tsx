// import React from "react";


// export function Something(){

//     // const data = {users : [ 'david', 'cuartas'], color: ['orange', 'colors']}
 

//     const edit = [{primary: ['orange', 'blue', 'green'] }];
    
//     const data = ['david', 'cuartas', 'orange', 'colors'];

//     let ar;

//     return (

//         <>
//         <div>
//             <h2>Ver mi map</h2>

//             <ul>
//                 <li>
//                     {data.map((da:any)=>(
//                         ar = da
//                     ))}
//                 </li>
//             </ul>
//         </div>
//         </>
//         )




// }


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
}

reportWebVitals();

