const newJournalEntryObject = (journalDate, journalTitle, journalEntry, journalMood) => {
    return {
        date: journalDate,
        title: journalTitle,
        entry: journalEntry,
        mood: journalMood,
    };
    //return singleEntry;
};

export default newJournalEntryObject;