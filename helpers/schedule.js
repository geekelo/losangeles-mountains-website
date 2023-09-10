// SUMMARY:
// This class is designed to generate tables based on the provided mountainScheduleData 
// and append them to specified container elements. It creates rows for each schedule 
// entry, with cells for date and address. The generated tables allow for displaying 
// mountain schedules in a structured format.

class ScheduleTableGenerator {

  // CONSTRUCTOR:
  // Initializes the class.
  // Creates an array of mountainScheduleData containing two arrays of objects, 
  // each representing a set of mountain schedules.

  constructor() {
    this.mountainScheduleData = [
      [
        { date: '2023-09-12', address: 'Mountain 1 Address 1' },
        { date: '2023-09-13', address: 'Mountain 1 Address 2' },
        { date: '2023-09-14', address: 'Mountain 1 Address 3' },
        { date: '2023-09-15', address: 'Mountain 1 Address 4' },
      ],
      [
        { date: '2023-09-16', address: 'Mountain 2 Address 1' },
        { date: '2023-09-17', address: 'Mountain 2 Address 2' },
        { date: '2023-09-18', address: 'Mountain 2 Address 3' },
        { date: '2023-09-19', address: 'Mountain 2 Address 4' },
      ]
    ];
    this.generateTables();
  }

  // generateTable(mountainindex, container):
  // Takes two arguments: mountainindex (index of the mountain schedule data to use) and container (DOM element where the table will be appended).
  // Creates a new HTML table element and assigns it the class 'table'.
  // Iterates through the mountain schedule data specified by mountainindex.
  // For each entry, it creates a new row (tr) and two cells (td) for date and address.
  // Populates the cells with the corresponding date and address data from mountainScheduleData.
  // Appends the row to the table.
  // Appends the table to the provided container element.

  generateTable(mountainindex, container) {
    const table = document.createElement('table');
    table.classList.add('table');

    this.mountainScheduleData[mountainindex].forEach((mountainData, index) => {
        const row = table.insertRow(index);
        const dateCell = row.insertCell(0);
        const addressCell = row.insertCell(1);

        dateCell.innerHTML = mountainData.date;
        addressCell.innerHTML = mountainData.address;
    });

    container.appendChild(table);
}

  // generateTables():
  // Loops through the mountainScheduleData array.
  // For each set of mountain schedules, it finds the corresponding container element using 
  // getElementById and generates a table using generateTable.

  generateTables() {
    for (let i = 0; i < this.mountainScheduleData.length; i++) {
      const container = document.getElementById(`mountain${i + 1}`);
      this.generateTable(i, container);
    }
  }
}

export default ScheduleTableGenerator;
