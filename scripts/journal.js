import Render from "./entryList.js";
import API from "./data.js";
import newJournalEntryObject from "./createEntry.js";
import updateFormFields from "./updateFormFields.js";

/*
    This Modules is the Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

//get fetch from json database
//this invocation of API.getJournalEntries populates on the dom when loading the webpage
// it accesses the journal database and .then passes that response through a html generator (converters and places in html)
API.getJournalEntries()
   .then(response => Render.showJournalEntries(response));
//"response" is a "taco" paramater that is taking the data from getJournalEntries and storing it. 
//render object with the method of showJournalEntries passes the response from the response function 
API.getJournalMoods()
   .then(response => Render.showMoodsRadioButtons(response));
// 
            //EVENT LISTENER to Delete Journal Entry OR Edit Journal Entry
const journalLogContainer = document.querySelector(".entryLog")
const registerListeners = () => {
    journalLogContainer.addEventListener("click", event => {

            //DELETE ENTRY BUTTON
            
            if (event.target.id.startsWith("deleteEntry--")) {
                // Extract UNIQUE entry id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all entries without invoking and render the response
                API.deleteJournalEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then((response) => Render.showJournalEntries(response))
            }

            //EDIT ENTRY BUTTON
            else if (event.target.id.startsWith("editEntry--")) {
                // Extract UNIQUE entry id from the button's id attribute, id created in html component
                //.split turns a strign into arrays at the chosen spot"--", and then you must specify which part of the array you want to return[1]
                const entryToEdit = event.target.id.split("--")[1]

                // Invoke the edit method "get request" of a single journal entry
                // grabs entry based on id declared in entryToEdit, .then takes that response "entryObject"
                // and plugs that response in as a paramater to the updateFormFields function, which sets the database object property values equal to input fields
                API.getSingleEntry(entryToEdit)
                    .then(entryObject => updateFormFields(entryObject))
            }

        })
    }

// EIDT AND DELETE BUTTON LISTENER IS INVOKED AND LISTENINGS
registerListeners()


                    // EDIT JOURNAL ENTRIES (after edit button is clicked)

//when invoked, this function resets the journal inputs, currently used in the saveJournalEditsButton.
const clearInputs = () => {
	document.querySelector("#journalId").value = "";
	document.querySelector("#journalDate").value = "";
	document.querySelector("#journalTitle").value = "";
	document.querySelector("#journalEntry").value = "";
	document.querySelector("#journalMood").value = "";
}

//Click Listener that waits for the save journal  button to be clicked FOR NEW ENTRIES AND EDITED ENTRIES
//IF = SAVE EDIT AFTER a journal from the database was edited and is being resubmitted, has journal ID
//ELSE = SAVE NEW JOURNAL, does NOT have journal ID
    //created hiddenEntryId variable to see if this is a new entry (no id) or a journal entry (has id) from the database that is being edited and resubmitted.
    //created variables to hold the journal entry input values
const saveJournalEditsButton = document.querySelector(".saveJournalButton")
saveJournalEditsButton.addEventListener("click", event => {
    const hiddenEntryId = document.querySelector("#journalId");
    const journalDate = document.getElementById("journalDate").value
    const journalTitle = document.getElementById("journalTitle").value
    const journalEntry = document.getElementById("journalEntry").value
    const journalMood = document.getElementById("journalMood").value

    //if #jouralId  "hiddenEntrtyId" has a value property not equal to empty (and it comes back true), this statement runs saving any entry that includes an id property while in the input forms
//..the statement was created to run after we click the edit button, make changes to a journal entry from the database, and this statement saves the edit to the database with the save/submit button 
    if (hiddenEntryId.value !== "") {

        //updateJournalEntry has 2 paramaters to pass through, 
        //1st the entry id, the paramater is a variable set eqaul to #journalId looking and specifying to look at the ".value" of the html element
        //2nd is our updated journal entry, presented as our newJournalEntryObject with the required paramaters using the above variables assigned to the values of the input boxes
        //paramater order is (name, quantity, desc, shapeId, typeId, seasonId)
        //after that updateJournalEntry has been "put request" to the database ".then" we return with an invokation of the getJournalEntries "get request"
        //then we take that response, clear our input fields, and return the render object with the showJournalEntries Method that is invoked with the response from our get request
		API.updateJournalEntry(hiddenEntryId.value, newJournalEntryObject(journalDate, journalTitle, journalEntry, journalMood))
        .then(() => {
            return API.getJournalEntries()
        })
        .then((allObjectsFromAPI) => {
            clearInputs()   
            return Render.showJournalEntries(allObjectsFromAPI)
        })   
        //IF hiddenEntryId.value is equal to nothing(and it comes back false), then this else statement is run and a new entry is created
        // NEW Journal Entry, that includes have a nested If/else statement,
            // IF  any fields is empty give an alert (true)
            // ELSE (false, came back all field have data) 
                //set a varaible equal to the our newjournalobject with the paramaters in the corresponding location for the arguments (properties) 
    } else {
        
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
           // variable that is equal to the response of a function invoked with paramaters that are set to the value of the html input boxes
            const journalEntrySubmit = newJournalEntryObject(journalDate, journalTitle, journalEntry, journalMood)
            //pass the new variable through the save "POST request"
            //.then return with a get request, which now includes the object submitted in the post request
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

//JOURNAL ENTRY FILTER BASED ON MOOD SELECTED ON ELEMENTS WITH THE NAME=MOODFILTERS which are inside of a radio button form
//RadioButton declares the elementS we are looking at by name of inputs we want to listen to
//forEach button inside the radiobutton element we invoke a click listener
// declare the target value as a variable
const moodRadioButtons = document.getElementsByName('moodFilter') 
console.log(moodRadioButtons)
moodRadioButtons.forEach(moods => {
    moods.addEventListener("click", event => {
        let mood = event.target.value
        console.log(mood)
        if (mood === "0") {
            API.getJournalEntries()
            .then(response => Render.showJournalEntries(response))
        } else {
            // then pass it through our render method
            API.getJournalEntries() // for the button clicked, take that button selection and "get request" our journal entries then take that response
            .then((response) => {  // .then take that response and filter it, and return that response as a filterEntry
                let filterEntry = response.filter(filtered => { //to filter thhe response declare a variable , set it equal to the response and add the object method of .filter ...

                    return filtered.journalMoodId === mood //and invoke that .filer with a function that returns when filtered.mood is equivilants to the target value "mood" as a number, not a string

                })
                Render.showJournalEntries(filterEntry)
            })
        }
    })
})

//Search Bar
// .then take that response and filter it, and return that response as a filterEntry
const searchBarElement = document.querySelector("#journalSearch")
API.getJournalEntries()
.then((response) => {
searchBarElement.addEventListener("keypress", event => {
    if (event.key === 'Enter') {
        let searchTerms = event.target.value
        console.log(searchTerms)
    
       //currently loosing search Terms value in for of loop
            for (searchTerms of Object.values(response)) {
                console.log(searchTerms)
            Render.showJournalEntries(searchTerms)
            }}
        })
    
})