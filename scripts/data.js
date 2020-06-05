//

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
            .then(
                (arrayOfEntries) => {
                journalEntries = arrayOfEntries
                }
            )
    }
}



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
