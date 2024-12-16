import React from 'react';

function EmployeeList({ employees, onEditEmployee, onDeleteEmployee }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Position</th>
            <th className="py-3 px-6 text-left">Salary</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{employee.name}</td>
              <td className="py-3 px-6">{employee.position}</td>
              <td className="py-3 px-6">${employee.salary}</td>
              <td className="py-3 px-6 space-x-2">
                <button
                  onClick={() => onEditEmployee(employee)}
                  className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteEmployee(employee.id)}
                  className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
