//json-server -p 8088 -w entires.json
const url = "http://localhost:8088"

//const api is an object, which can contain methods (functions) which can be called with dot notation
const API = {
    
    //Responsible for requesting all of the entries from the API
    //getJournalEntries is a function that returns a "get fetch" request from the entries.json database server info using the url variable
        // that fetch comes back (using return) as a "promise" that MUST be handled with a .then statement (because its asyncrinus)
                // .then function wait for a response and returns a new promise, allowing for this asyncrinus fetch event to complete before it moves to the next function.
            // 1st .then pass that response promise through a .json() method that parses our json data and returns a promise as a javascript object "response"(which is on the left side of the equation).
            // 2nd .then passes that response promise from our .json() method and returns it!
            // after these 2 .then functions, when this function is invoked it will needs to be iterated though another .then function that places the response promise in as a paramater for a function that renders all objects in the response to the dom (that dom response is held in the response variable on the left side of that function)
    getJournalEntries: () => {
        return fetch(`${url}/journalEntries`)
            .then(response => response.json()) //returns automatically since its on the same line without saying "return"
            .then(response => response) //returns automatically since its on 1 line
    },
    //responsible for sending the object to be saved in the API after the edit button is used
    saveJournalEntry: (newEntryObject) => {
        return fetch(`${url}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    },
    //responsible for running after the delete button is clicked
    deleteJournalEntry: (id) => {
        return fetch(`${url}/journalEntries/${id}`, {
            method: "DELETE",
        }).then(response => response.json())
            .then(response => response)
    },
    //responsible or grabbing a single entry from the database to be displayed in the input fields of the journal form, after the edit button is clicked.
    getSingleEntry: (id) => {
		return fetch(`${url}/journalEntries/${id}`)
		.then(response => response.json());
    },
    //responsible for submitting"PUT"  a journal entry that already contains an id (this entry type is usually populated in the form from the edit button), after the save button is clicked
    updateJournalEntry: (id, updatedEntryObj) => {
		return fetch(`${url}/journalEntries/${id}`, {
			method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(updatedEntryObj)
		})
    },
    //responbisble for fetching "get" the journal entries based on filter of mood input names
    getjournalEntryMood: () => {
        return fetch(`${url}/journalMoods`)
		.then(response => response.json());
    }
}



export default API
//because this is an object, it is able to house muiltipel methods(functions) which are related to this api...


