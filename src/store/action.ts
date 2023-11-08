import { createAction } from '@reduxjs/toolkit';

export const chosenCity = createAction<{ city: string }>('places/chosenCity');
export const fillOffers = createAction('places/fillOffers');
