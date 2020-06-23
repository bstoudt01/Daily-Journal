import Render from "./entryList.js";
import API from "./data.js";
import newJournalEntryObject from "./createEntry.js";
import updateFormFields from "./updateFormFields.js";

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
//this invocation accesses the journal database and .then passes that response through a html generator (converters and places in html)
//get fetch from json database
API.getJournalEntries()
   .then(response => Render.showJournalEntries(response));
//response is a taco paramater that is taking the data from getJournalEntries and storing it. 
//render object with the method of showJournalEntries passes the response from the response function 

// 
            //EVENT LISTENER to Delete Journal Entry
//
const journalLogContainer = document.querySelector(".entryLog")

export default {
registerListeners () {
    journalLogContainer.addEventListener("click", event => {
            //DELETE ENTRY BUTTON
            if (event.target.id.startsWith("deleteEntry--")) {
                // Extract UNIQUE entry id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all entries and render them
                API.deleteJournalEntry(entryToDelete)
                    .then(API.getJournalEntries())
                    .then(() => Render.showJournalEntries())
            }

            //EDIT ENTRY BUTTON
            else if (event.target.id.startsWith("editEntry--")) {
                // Extract UNIQUE entry id from the button's id attribute, id created in html component
                //.split turns a strign into arrays at the chosen spot"--", and then you must specify which part of the array you want to return[1]
                const entryToEdit = event.target.id.split("--")[1]

                // Invoke the edit method, then get all entries and render them
                // grabs entry based on id declared in entryToEdit, .then takes that response "entryObject"
                // and plugs that response in as a paramater to the updateFormFields function, which sets the database object property values equal to input fields
                API.getSingleEntry(entryToEdit)
                    .then(entryObject => updateFormFields(entryObject))
            }

        })
    }
}


                    // EDIT JOURNAL ENTRIES

//when invoked, this function resets the journal inputs, currently used in the saveJournalEditsButton.
const clearInputs = () => {
	document.querySelector("#journalId").value = "";
	document.querySelector("#journalDate").value = "";
	document.querySelector("#journalTitle").value = "";
	document.querySelector("#journalEntry").value = "";
	document.querySelector("#journalMood").value = "";
}

//Click Listener that waits for the save journal  button to be clicked 
//IF = SAVE EDIT AFTER a journal from the database was edited and is being resubmitted, has journal ID
//ELSE = SAVE NEW JOURNAL, does NOT have journal ID
    //created hiddenEntryId variable to see if this is a new entry (no id) or a journal entry (has id) from the database that is being edited and resubmitted.
const saveJournalEditsButton = document.querySelector(".saveJournalButton")
saveJournalEditsButton.addEventListener("click", event => {
    const hiddenEntryId = document.querySelector("#journalId");

    if (hiddenEntryId.value !== "") {
		const journalDateInput = document.querySelector("#journalDate").value;
		const journalTitleInput = document.querySelector("#journalTitle").value;
		const journalEntryInput = document.querySelector("#journalEntry").value;
        const journalMoodInput = document.querySelector("#journalMood").value;
        //updateJournalEntry has 2 paramaters to pass through, 
        //1st is the entry id and 2nd is our updated journal entry presented as our newJournalEntryObject with the required paramaters using the above variables assigned to the values of the input boxes
        //(name, quantity, desc, shapeId, typeId, seasonId)
        //after that updateJournalEntry has been put to the database then we return with an invokation of the getJournalEntries "get request"
        //then we take that response, clear our input fields, and return the render object with the showJournalEntries Method that is invoked with the response from our get request
		API.updateJournalEntry(hiddenEntryId.value, newJournalEntryObject(journalDateInput, journalTitleInput, journalEntryInput, journalMoodInput))
        .then(() => {
            return API.getJournalEntries()
        })
        .then((allObjectsFromAPI) => {
            clearInputs()   

            return Render.showJournalEntries(allObjectsFromAPI)
        })   
       // console.log(journalEntrySubmit)
        //IF it is TRUE, there is NO entry ID...
        // NEW Journal Entry, we have a nested If else statement,
            // IF  all fields are not populated give an alert 
            // ELSE set a varaible equal to the our newjournalobject with the paramaters in the corresponding location for the arguments (properties) 
    } else {
        const journalDate = document.getElementById("journalDate").value
        const journalTitle = document.getElementById("journalTitle").value
        const journalEntry = document.getElementById("journalEntry").value
        const journalMood = document.getElementById("journalMood").value
       if ( 
            (journalDate === "") ||
            //console.log(dateOfEntry)
            (journalTitle === "") ||
            //console.log(conceptsCovered)
            (journalEntry === "") ||
            //console.log(journalEntry)
            (journalMood === "")
            // console.log(conceptsCovered) 
        ) 
       {alert ("you forgot something")}
       else {
           // variable that is equal to the response of a function invoked with the paramaters captured from the form
            const journalEntrySubmit = newJournalEntryObject(journalDate, journalTitle, journalEntry, journalMood )
            //pass the new variable through the save "POST" fetch request 
            //.then return with a get request
            //.then take that response, clear the input fields, 
            //....and return the render object using the showJournalEntries method that is invoked with the getJournalEntries Response
            API.saveJournalEntry(journalEntrySubmit).then(() => {
                return API.getJournalEntries()
            })
            .then((allObjectsFromAPI) => {
                clearInputs()
                return Render.showJournalEntries(allObjectsFromAPI)
            })   
            console.log(journalEntrySubmit)
        }
        
            
    }
})

// JOURNAL ENTRY FILTER BASED ON MOOD SELECTED IN THE MOOD FILTERS radio button form
const radioButton = document.getElementsByName('mood')
radioButton.forEach(button => {
    if(button.value = journalMood) {
        
    }
})