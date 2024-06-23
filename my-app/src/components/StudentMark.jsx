import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterRollNo, filterStudents, sortStudentsByTotal, deleteStudent } from '../reducers/staffSlice';
import './StudentMark.css'

const StudentMark = () => {
  const dispatch = useDispatch();
  const { filterRollNo, filteredStudents } = useSelector((state) => state.staff); // Check state.staff matches your slice name

  useEffect(() => {
    dispatch(filterStudents());
  }, [filterRollNo, dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilterRollNo(e.target.value));
  };

  const handleSort = () => {
    dispatch(sortStudentsByTotal());
  };

  const handleDelete = (index) => {
    dispatch(deleteStudent(index));
  };

  return (
    <div>
   <center><h3 >STUDENT DETAILS</h3></center>
      <center><input type="text" className="filter-input " placeholder="Enter Roll No" value={filterRollNo} onChange={handleFilterChange} />
      <button className='btn-search' onClick={() => dispatch(filterStudents())}>Search</button></center><br></br>

      <center><table className='student-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Mark 3</th>
            <th>Mark 4</th>
            <th>Mark 5</th>
            <th>Total Mark<button className='btn-sort' onClick={handleSort}>Sort</button></th>
           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.mark1}</td>
              <td>{student.mark2}</td>
              <td>{student.mark3}</td>
              <td>{student.mark4}</td>
              <td>{student.mark5}</td>
              <td>{student.total}</td>
             
              <td>
                <button className='btn-action'>Edit</button>
                <button className='btn-action' onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></center>
    </div>
  );
};

export default StudentMark;