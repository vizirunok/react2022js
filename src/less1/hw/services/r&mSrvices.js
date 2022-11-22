export default function getActors() {
    return(
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
    )
}