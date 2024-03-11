import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to a backend server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mt-6 grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-6 p-2 md:p-2">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="bg-gray-600 opacity-75 p-3 rounded-md shadow-sm sm:text-sm w-full"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 md:col-span-6 p-2 md:p-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="bg-gray-600 opacity-75 p-3 rounded-md shadow-sm sm:text-sm w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="px-2">
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={8}
          required
          className="bg-gray-600 opacity-75 p-3 rounded-md shadow-sm sm:text-sm w-full"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="px-2 w-full">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
