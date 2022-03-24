import { FormatDate } from "./helper.js";
/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
    <h3>${entry.concept}</h3>
      <p class="date">${formatDate(entry.date)}</p>
      <p class="mood">${entry.mood}</p>
      <p>${entry.text}</p>
  </section>
    `
}