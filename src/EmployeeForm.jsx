import React, { useState, useEffect } from 'react';

function EmployeeForm({ onSaveEmployee, employee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setPosition(employee.position);
      setSalary(employee.salary);
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !salary) return;

    const newEmployee = { name, position, salary, id: employee?.id || Date.now() };
    onSaveEmployee(newEmployee);

    // Clear the form fields
    setName('');
    setPosition('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Enter employee name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Enter employee position"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold">Salary</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Enter employee salary"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        {employee ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
}

export default EmployeeForm;
