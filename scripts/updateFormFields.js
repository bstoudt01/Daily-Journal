const updateFormFields = (entryObject) => {
	// Get reference to input fields in the form
	//declares variables to equal the data of an html element
    const hiddenJournalId = document.querySelector("#journalId");
	const journalDateInput = document.querySelector("#journalDate");
	const journalTitleInput = document.querySelector("#journalTitle");
	const journalEntryInput = document.querySelector("#journalEntry");
	const journalMoodInput = document.querySelector("#journalMood");
	// set the userinputed value of that html data equal to??? the properties on our form???? onto the DOM...
	hiddenJournalId.value = entryObject.id;
	journalDateInput.value = entryObject.date
	journalTitleInput.value = entryObject.title;
	journalEntryInput.value = entryObject.entry;
	journalMoodInput.value = entryObject.mood;
	
}

export default updateFormFields;