let data = {
    "bigCats": [],
    "dogs": [],
    "bigFish": []
  };
  
  // Fetch data from data.json file
  fetch('data.json')
    .then(response => response.json())
    .then(fetchedData => {
      data = fetchedData;
      renderTable(data.bigCats, 'bigCats');
      renderTable(data.dogs, 'dogs');
      renderTable(data.bigFish, 'bigFish');
    })
    .catch(error => console.error("Error loading data:", error));
  
  // Function to render a table
  function renderTable(dataArray, category) {
    const tbody = document.getElementById(`${category}Body`);
    tbody.innerHTML = '';
    dataArray.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.species}</td>
        <td class="name-column">${item.name}</td>
        <td>${item.size}</td>
        <td>${item.location}</td>
        <td><img src="${item.image}" class="animal-image" /></td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editAnimal(${index}, '${category}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteAnimal(${index}, '${category}')">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  
    // Add sorting
    document.querySelectorAll(`#${category}Table .sortable`).forEach(th => {
      th.addEventListener('click', () => {
        const field = th.getAttribute('data-sort');
        dataArray.sort((a, b) => {
          if (typeof a[field] === 'string') {
            return a[field].localeCompare(b[field]);
          } else {
            return parseFloat(a[field]) - parseFloat(b[field]);
          }
        });
        renderTable(dataArray, category);
      });
    });
  
    // Add an animal
    document.getElementById(`add${capitalizeFirstLetter(category)}`).addEventListener('click', () => {
      const newItem = {
        species: category === 'bigCats' ? 'Big Cats' : category === 'dogs' ? 'Dog' : 'Big Fish',
        name: 'New Animal',
        size: '5 ft',
        location: 'Unknown',
        image: 'default.jpg'
      };
      dataArray.push(newItem);
      renderTable(dataArray, category);
    });
  }
  
  // Edit an animal
  function editAnimal(index, category) {
    const animal = data[category][index];
    const newName = prompt('Enter new name:', animal.name);
    if (newName) {
      animal.name = newName;
      renderTable(data[category], category);
    }
  }
  
  // Delete an animal
  function deleteAnimal(index, category) {
    data[category].splice(index, 1);
    renderTable(data[category], category);
  }
  
  // Helper function to capitalize the first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }