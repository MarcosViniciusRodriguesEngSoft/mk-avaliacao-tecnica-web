import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPersonDTO } from '@/models/mk-avaliacao-api.model';

interface PersonState {
    people: IPersonDTO[];
}

const initialState: PersonState = {
    people: [],
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<IPersonDTO>) => {
            state.people.push(action.payload);
        },
    },
});

export const { addPerson } = personSlice.actions;
export default personSlice.reducer;
