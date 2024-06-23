import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterRollNo: '',
  filteredStudents: [], 
  students: [
    { name: 'Nandhika', rollNo: '20ISR029', mark1: 95, mark2: 65, mark3: 99, mark4: 78, mark5: 98, total: 432 },
    { name: 'Akshaya', rollNo: '20ISR030', mark1: 95, mark2: 65, mark3: 99, mark4: 68, mark5: 78, total: 498 },
    { name: 'Guru', rollNo: '20ISR001', mark1: 75, mark2: 92, mark3: 77, mark4: 81, mark5: 67, total: 389 },
    { name: 'Kalai', rollNo: '20ISR023', mark1: 78, mark2: 85, mark3: 56, mark4: 86, mark5: 34, total: 304,  },
    { name: 'ram', rollNo: '20ISR049', mark1: 79, mark2: 90, mark3: 88, mark4: 88, mark5: 96, total: 490, },
  ],
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setFilterRollNo: (state, action) => {
      state.filterRollNo = action.payload;
    },
    filterStudents: (state) => {
      const normalizedFilter = state.filterRollNo.toLowerCase();
      state.filteredStudents = state.students.filter(student =>
        student.rollNo.toLowerCase().includes(normalizedFilter)
      );
    },
    sortStudentsByTotal: (state) => {
      state.students.sort((a, b) => b.total - a.total);
      state.filteredStudents = [...state.students]; // Ensure filtered list reflects sorted order
    },
    deleteStudent: (state, action) => {
      state.filteredStudents = state.filteredStudents.filter((student, index) =>
        action.payload !== index
      );
    },
  },
});

export const { setFilterRollNo, filterStudents, sortStudentsByTotal, deleteStudent } = staffSlice.actions;

export default staffSlice.reducer;