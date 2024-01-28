import React, { useState } from "react";
//Temperature units
const temp_options = [
  {
    id: 1,
    value: "celcuis",
  },
  {
    id: 2,
    value: "Fahrenheit",
  },
];

function Converter() {
  const [value, setValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("Celcius");
  const [celciusValue, setCelciusValue] = useState("");
  const [farenValue, setFarenValue] = useState("");

  //Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Validating the input
    if (!value && selectedUnit) {
      alert("You need to provide a value!");
    }
    //Displaying the results based on conditions
    let results;
    if (selectedUnit === "Celcius") {
      setFarenValue("");
      results = celcToFahr(value);
      setCelciusValue(results);
    } else if (selectedUnit === "Fahrenheit") {
      setCelciusValue("");
      results = farenToCelcius(value);
      setFarenValue(results);
    } else {
      return results;
    }
  }

  // Function for Celcius to Fahrenheit
  function celcToFahr(celcius) {
    return (celcius * 9.0) / 5.0 + 32.0;
  }

  // Function for Fahrenheit to Celcius
  function farenToCelcius(faren) {
    return (faren - 32) * (5 / 9);
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      {/* for temperature value */}
      <div className="mb-3 flex-col">
        <label htmlFor="temperature">Enter Temperature</label>
        <input
          type="number"
          name="temperature"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter temperature"
          className="py-2 px-2 mt-2 rounded-md"
        />
      </div>
      {/* for units select options */}
      <div className="flex flex-col">
        <label htmlFor="units">Choose Units</label>
        <select
          className="mt-2 py-3 px-2"
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          {temp_options.map((unit) => (
            <option key={unit.id} value={unit.value}>
              {unit.value}
            </option>
          ))}
        </select>
      </div>
      {/* Button for submission and results*/}
      <div className="flex items-center justify-between mt-10">
        <button
          className="bg-blue-500 mt-3 text-white py-2 px-3 rounded-lg text-lg"
          type="submit"
        >
          Submit
        </button>
        <span className="text-xl p-3 mt-5 rounded-md bg-gray-300 font-medium">
          {selectedUnit === "Celcius" && value
            ? `${celciusValue}°C
`
            : selectedUnit === "Fahrenheit" && value
            ? `${farenValue}F`
            : ""}
        </span>
      </div>
    </form>
  );
}

export default Converter;
