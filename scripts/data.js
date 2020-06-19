
let journalEntries = []   



const url = "http://localhost:3000"

//const api is an object, which can contain methods (functions) which can be called with dot notation
const API = {

    //getJournalEntries is a function that returns a "get fetch" from the entries.json database served on our localhost:3000
        // that fetch comes back (using return) as a "promise" that MUST be handled with a .then statement (because its asyncrinus)
            // .then function returns a new promise, allowing for this asyncrinus fetch event to complete before it moves to the next function.
            // we .then pass that response promise through a .json() method that parses our json data and returns a promise as a javascript object.
            // we .then pass that response promise from our .json() method and return it!
    getJournalEntries: () => {
        return fetch(`${url}/journalEntries`)
            .then(response => response.json()) //returns automatically since its on the same line without saying "return"
            .then(response => response) //returns automatically since its on 1 line
    },


    saveJournalEntry: (newEntryObject) => {
        return fetch(`${url}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}



export default API
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
