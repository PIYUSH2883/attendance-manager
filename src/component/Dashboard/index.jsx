import React, { useState } from 'react';
import Navbar from '../navbar';

const Dashboard = () => {
   
   
    const [students, setStudents] = useState([
        { rollNo: '001', name: 'Amit Sharma', isPresent: false },
        { rollNo: '002', name: 'Priya Singh', isPresent: false },
        { rollNo: '003', name: 'Ravi Kumar', isPresent: false },
        { rollNo: '004', name: 'Anjali Verma', isPresent: false },
        { rollNo: '005', name: 'Vikram Mehta', isPresent: false },
        { rollNo: '006', name: 'Sneha Patel', isPresent: false },
        { rollNo: '007', name: 'Rahul Nair', isPresent: false },
        { rollNo: '008', name: 'Kavita Desai', isPresent: false},
        { rollNo: '009', name: 'Rohan Gupta', isPresent: false },
        { rollNo: '010', name: 'Neha Reddy', isPresent: false },
        { rollNo: '011', name: 'Sanjay Rao', isPresent: false },
        { rollNo: '012', name: 'Pooja Iyer', isPresent: false },
        { rollNo: '013', name: 'Arjun Kapoor', isPresent: false },
        { rollNo: '014', name: 'Meera Joshi', isPresent: false },
        { rollNo: '015', name: 'Siddharth Pandey', isPresent: false },
    ]);

    // Toggle present/absent status
    const toggleAttendance = (index) => {
        const updatedStudents = [...students];
        updatedStudents[index].isPresent = !updatedStudents[index].isPresent;
        setStudents(updatedStudents);
    };

    return (
        <>
      
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-auto">
            <div className="overflow-x-auto text-center w-full max-w-4xl p-4">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white text-center">
                        <tr>
                            <th className="py-3 px-6  ">Roll No.</th>
                            <th className="py-3 px-6 ">Name</th>
                            <th className="py-3 px-6 ">Attendance</th>
                        </tr>
                    </thead>
                    <tbody className='font-semibold'>
                        {students.map((student, index) => (
                            <tr key={student.rollNo} className="border-b">
                                <td className="py-3 px-6">{student.rollNo}</td>
                                <td className="py-3 px-6">{student.name}</td>
                                <td className="py-3 px-6 text-center">
                                    <button
                                        onClick={() => toggleAttendance(index)}
                                        className={`${
                                            student.isPresent
                                                ? 'bg-green-500'
                                                : 'bg-red-500'
                                        } text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                                    >
                                        {student.isPresent ? 'Present' : 'Absent'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='px-3 py-2 my-3 mx-auto bg-slate-800 rounded-3xl text-white text-lg'> Add Student</button>
            </div>
        </div>
    
        </>
    );
};

export default Dashboard;
