import { createSelector } from "@reduxjs/toolkit";
import { selectTextFilter } from "../filter/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLength = (state) => state.contacts.items.length;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, textFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
