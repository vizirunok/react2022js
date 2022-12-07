import './App.css';
import {useForm} from "react-hook-form";
import {createRef, useState} from "react";

export default function App() {

    let {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        console.log(data);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title',{required: true})}/>
                {errors.title && <span>Write title, please</span>}
                <input {...register('body', {required: true})}/>
                {errors.body && <span>Write body, please</span>}
                <input type="submit" value={'Save'}/>
                <select {...register('userId')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </form>
        </div>
    )
}




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

// DEMO 2

// function App() {
//
//     let login = createRef();
//     let password = createRef();
//
//     function onSubmit(e) {
//         e.preventDefault();
//         console.log(login.current.value)
//         console.log(password.current.value)
//     }
//
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type="text" name={'login'} ref={login}/>
//                 <input type="text" name={'passsword'} ref={password}/>
//                 <button>log in</button>
//             </form>
//         </div>
//     )
// }
//
// export default App;


// DEMO 4

// export default function App() {
//
//     let {register, handleSubmit} = useForm({
//         defaultValues: {
//             title: 'title default',
//             body: 'body default'
//         }
//     });
//
//
//     function onSubmit(data) {
//         console.log(data)
//     }
//
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register('title', {required: true})}/>
//                 <input {...register('body')}/>
//                 <input type="submit" value={'save post'}/>
//
//                 <select {...register('userId')}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                     <option value="10">10</option>
//                 </select>
//
//             </form>
//         </div>
//     )
// }


//     let {register, handleSubmit} = useForm({
//         defaultValues: {
//             title: 'title default',
//             body: 'body default'
//         }
//     });
//
//     function onSubmit(data) {
//         console.log(data)
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register('title', {required: true})}/>
//                 <input {...register('body')}/>
//                 <input type="submit" value={'save post'}/>
//                 <select {...register('userId')}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                     <option value="10">10</option>
//                 </select>
//             </form>
//         </div>
//     )
// }