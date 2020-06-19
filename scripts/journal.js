import Render from "./entryList.js";
import API from "./data.js";
import newJournalEntryObject from "./createEntry.js";

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

//responsible for listening to a click the submit journal entry button to post the journal entry to the json database
const journalSubmitButton = document.querySelector(".submitJournalButton")


journalSubmitButton.addEventListener("click", (clickEvent) => {
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
        const journalEntrySubmit = newJournalEntryObject(journalDate, journalTitle, journalEntry, journalMood )
        API.saveJournalEntry(journalEntrySubmit)   
        console.log(journalEntrySubmit)
    }
        
})




//invoked the object containing a factory function whose responsibility is to generate an object that represents a journal entry.
const firstEntry = newJournalEntryObject("2020/02/12", "abc", "123", "happy")
//console.log(firstEntry)

API.saveJournalEntry(firstEntry)