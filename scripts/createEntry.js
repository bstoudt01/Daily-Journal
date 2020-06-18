const newJournalEntryObject = (journalDate, journalTitle, journalEntries, journalMood) => {
    let singleEntry = {
        date: journalDate,
        title: journalTitle,
        entries: journalEntries,
        mood: journalMood,
    };
    return singleEntry;
};

export default newJournalEntryObject;