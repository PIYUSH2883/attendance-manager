import React, { useState } from 'react';
import Navbar from '../navbar';

const History = () => {
    const [students, setStudents] = useState([
        { rollNo: '001', name: 'Amit Sharma', attendance: [true, false, true, true, false, true, true, false] },
        { rollNo: '002', name: 'Priya Singh', attendance: [true, true, true, false, true, true, false, true] },
        { rollNo: '003', name: 'Ravi Kumar', attendance: [false, true, true, true, false, false, true, true] },
        { rollNo: '004', name: 'Anjali Verma', attendance: [true, true, false, true, true, true, false, true] },
        { rollNo: '005', name: 'Vikram Mehta', attendance: [false, false, true, true, true, false, true, true] },
        { rollNo: '006', name: 'Sneha Patel', attendance: [true, true, true, false, true, true, true, false] },
        { rollNo: '007', name: 'Rahul Nair', attendance: [true, false, true, true, false, true, true, true] },
        { rollNo: '008', name: 'Kavita Desai', attendance: [true, true, true, true, true, true, false, true] },
    ]);
    const getDates = () => {
        const dates = [];
        for (let i = 7; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            dates.push(date.toLocaleDateString());
        }
        return dates;
    };

    const dates = getDates();

    return (
        <>
            <Navbar />
            <div className="text-center min-h-screen bg-yellow-100 overflow-auto text-center">
                    <h1 className="text-3xl font-bold mb-6">Attendance History</h1>
                <div className=" text-center w-full max-w-4xl p-4">
                    <table className="min-w-full  bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-800 text-white text-center">
                            <tr>
                                <th className="py-3 px-6">Roll No.</th>
                                <th className="py-3 px-6">Name</th>
                                {dates.map((date, index) => (
                                    <th key={index} className="py-3 px-6">{date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="font-semibold">
                            {students.map((student) => (
                                <tr key={student.rollNo} className="border-b">
                                    <td className="py-3 px-6">{student.rollNo}</td>
                                    <td className="py-3 px-6">{student.name}</td>
                                    {student.attendance.map((isPresent, index) => (
                                        <td key={index} className={`py-3 px-6 text-center ${isPresent ? 'bg-green-200' : 'bg-red-200'}`}>
                                            {isPresent ? 'P' : 'A'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default History;
