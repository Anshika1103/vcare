import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

function Disease(){
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the API URL based on the selected filters
        const apiUrl = `/api/disease`;

        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [type, value, date]);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="filter">
        <label htmlFor="type">Type:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value=""></option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="value">Value:</label>
        <input type="text" id="value" value={value} onChange={handleValueChange} />
      </div>

      <div className="filter">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>

      {/* Display the Google Chart */}
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ['Type', 'Value'],
          ...data.map((item) => [item.type, item.value]),
        ]}
        options={{
          title: 'Data Visualization',
          hAxis: { title: 'Type Dimension', minValue: 0 },
          vAxis: { title: 'Value', minValue: 0 },
        }}
      />
    </div>
  );
};

export default Disease;
