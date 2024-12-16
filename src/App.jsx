import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Handle adding or updating an employee
  const handleSaveEmployee = (employee) => {
    if (editingEmployee) {
      const updatedEmployees = employees.map((emp) =>
        emp.id === employee.id ? employee : emp
      );
      setEmployees(updatedEmployees);
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
    setEditingEmployee(null);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Employee Details CRUD
        </h1>
        <EmployeeForm
          onSaveEmployee={handleSaveEmployee}
          employee={editingEmployee}
        />
        <EmployeeList
          employees={employees}
          onEditEmployee={handleEditEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </div>
    </div>
  );
}

export default App;
