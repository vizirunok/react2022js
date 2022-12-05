import './App.css';
import {createRef, useState} from "react";
import {useForm} from "react-hook-form";

function App() {

    return (
        <div>
        </div>
    );
}

export default App;


// DEMO 1

// function App() {
//
//     let [info, setInfo] = useState({login:'', password: ''});
//
//
//     function onSubmit(e) {
//         e.preventDefault();
//         console.log(info)
//     }
//
//     function onChange(e) {
//         setInfo({...info, [e.target.name]: e.target.value})
//     }
//
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type="text" name={'login'} value={info.login} onChange={onChange}/>
//                 <input type="text" name={'password'} value={info.password} onChange={onChange}/>
//                 <button>Click Me!</button>
//             </form>
//         </div>
//     );
// }
//
// export default App;


// let {register, handleSubmit} = useForm({
//     defaultValues: {
//         title: 'title default',
//         body: 'body default'
//     }
// });
//
//
// function onSubmit(data) {
//     console.log(data)
// }
//
//
// return (
//     <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input {...register('title', {required: true})}/>
//             <input {...register('body')}/>
//             <input type="submit" value={'save post'}/>
//
//             <select {...register('userId')}>
//                 <option value="">1</option>
//                 <option value="">2</option>
//                 <option value="">3</option>
//                 <option value="">4</option>
//                 <option value="">5</option>
//                 <option value="">6</option>
//                 <option value="">7</option>
//                 <option value="">8</option>
//                 <option value="">9</option>
//                 <option value="">10</option>
//             </select>
//
//         </form>