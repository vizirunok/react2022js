import './App.css';
import Inform from "./components/simpsons/theSimpsons";
import Gray from "./components/users/final";
import RM from "./components/r&m/second";
import AllInfo from "./components/twoSimps/finaly";
import Final from "./components/repeat/third";
import {Hike} from "./components/rickandM/Information";


function App() {
    return (
        <div className={'allOfSimps'}>
            {/*<Inform*/}
            {/*    itemName={'The Simpsons'}*/}
            {/*    itemPicture={"https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"}*/}
            {/*    itemInfo={'The Simpsons are the main protagonists of the TV show The Simpsons. The family first appeared on The Tracey Ullman Show, in the comedy short Good Night. The family has hundreds of relatives, including Mr. Burns and Patty and Selma.'}*/}
            {/*/>*/}
            {/*<Inform*/}
            {/*    itemName={'Homer Simpson'}*/}
            {/*    itemPicture={"https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"}*/}
            {/*    itemInfo={'Homer Jay Simpson (born May 12, 1956)[36] is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesnt. He also serves as the main protagonist of the The Simpsons Movie.'}*/}
            {/*/>*/}
            {/*<Inform*/}
            {/*    itemName={'Lisa Simpson'}*/}
            {/*    itemPicture={"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"}*/}
            {/*    itemInfo={'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}*/}
            {/*/>*/}
            {/*<Inform*/}
            {/*    itemName={'Bart Simpson'}*/}
            {/*    itemPicture={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}*/}
            {/*    itemInfo={'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'}*/}
            {/*/>*/}
            {/*<h2>app component users</h2>*/}
            {/*<Gray/>*/}

            {/*<RM />*/}

            {/*<AllInfo />*/}

            {/*<Final/>*/}

        </div>
    );
}

export default App;


// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів