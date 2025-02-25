import { useState } from "react";

// Header Component
function Header() {
  return (
    <header className="bg-blue-600 text-white text-center p-6 text-2xl font-bold shadow-lg w-full">
      React.js Fundamentals Assignment
    </header>
  );
}

// Profile Component
function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white max-w-md w-full text-center">
      <h2 className="text-xl font-semibold text-gray-700">Profile</h2>
      <p className="text-gray-600"><strong>Name:</strong> {name}</p>
      <p className="text-gray-600"><strong>Email:</strong> {email}</p>
      <input 
        type="text" 
        placeholder="Update Name" 
        className="border p-2 rounded w-full mt-3" 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Update Email" 
        className="border p-2 rounded w-full mt-3" 
        onChange={(e) => setEmail(e.target.value)} 
      />
    </div>
  );
}

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white max-w-md w-full text-center">
      <h2 className="text-xl font-semibold text-gray-700">Counter</h2>
      <p className="text-3xl font-bold text-blue-600">{count}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={() => setCount(count + 1)} className="bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700">Increment</button>
        <button onClick={() => setCount(count - 1)} className="bg-red-600 text-white px-6 py-2 rounded shadow-md hover:bg-red-700">Decrement</button>
        <button onClick={() => setCount(0)} className="bg-gray-600 text-white px-6 py-2 rounded shadow-md hover:bg-gray-700">Reset</button>
      </div>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-6 bg-gray-100">
      <Header />
      <Profile />
      <Counter />
    </div>
  );
}
