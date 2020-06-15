
let journalEntries = []   
//const api is an object, which can contain key value pairs of getJournalEntries:return.then.then

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json())
            .then(
                (arrayOfEntries) => {
                journalEntries = arrayOfEntries
                }
            )
    }
}

export {API, journalEntries}

//because this is an object, it is able to house muiltipel methods(functions) which are related to this api...



// const getJournalEntries = () => {
//     return fetch("http://localhost:3000/journalEntries").then(
//         (response) => {
//             return response.json()
//         }
//     ) 
//         .then(
//             (arrayOfEntries) => {
//                 journalEntries = arrayOfEntries
//             }
//         )
// }
// getJournalEntries().then(
// 	() => {
// 		journalEntries
// 	}
// )
