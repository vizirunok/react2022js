function Rocket({value}) {

    return (
        <div>
            <h5>Mission_name: {value.mission_name}</h5>
            <p>Launch_year: {value.launch_year}</p>
            <img src={value.links.mission_patch_small}/>
        </div>
    )
}

export {Rocket}