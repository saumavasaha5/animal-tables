# Animal Tables

This project is a dynamic web application that displays information about various animals categorized into Big Cats, Dogs, and Big Fish. The data is fetched from a data.json file and rendered into interactive tables with features like sorting, adding, editing, and deleting entries.


## Features

- Displays animal data fetched from a 'data.json' file.
- Allows sorting of table columns by species.
- Supports editimg and deleteing animal entries.
- Adds new entries dynamically for each category (Big Cats, Dogs, Big Fish).
- Images are displayed with hover scaling for better visibility.


## Technologies Used

- HTML5: Structure of the web page.
- CSS3: Custom styles, including hover effects.
- JavaScript: Dynamic rendering and interactivity.
- Bootstrap 5: Responsive design and styling.
- JSON: Data storage for animal information.


## Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge).
- A local server (optional, but recommended for handling fetch requests).


## Installation

1. Clone the repository:
git clone https://github.com/your-username/animal-tables.git
cd animal-tables
2. Place the project files in your local server root directory (if using a server).
3. Open the index.html file in a web browser to view the application.
4. (Optional) Use a local server like Live Server for a smoother experience.


## Project Structure

project-root/
│
├── index.html  # Main HTML file
├── script.js   # JavaScript file for interactivity
├── data.json   # JSON file containing animal data
├── images/     # Folder containing animal images
└── README.md   # Project documentation

## Usage

1. View Animals:
Each category is displayed in a separate table (Big Cats, Dogs, Big Fish).

2. Sort Animals:
Click the sort icons in column headers to sort the data.

3. Add an Animal:
Click the "Add" button below each table to add a new animal entry.

4. Edit an Animal:
Click the Edit button for an animal entry to modify its name.

5. Delete an Animal:
Click the Delete button for an animal entry to remove it.


## Future Enhancements

- Add a modal-based form for editing animal data.
- Include validation for new entries.
- Fetch data from an external API instead of a static JSON file.