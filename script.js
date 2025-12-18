// Fetch data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Store each key in localStorage
    for (let key in data) {
      localStorage.setItem(key, JSON.stringify(JSON.parse(data[key]))); 
      // JSON.parse because in your export, arrays were stored as strings
    }
    console.log('Data loaded from JSON file!');
    // Optionally, refresh the page or render the data
  })
  .catch(err => console.error('Error loading JSON:', err));
