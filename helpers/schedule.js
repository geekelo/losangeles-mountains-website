class ScheduleTableGenerator {
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

  generateTables() {
    for (let i = 0; i < this.mountainScheduleData.length; i++) {
      const container = document.getElementById(`mountain${i + 1}`);
      this.generateTable(i, container);
    }
  }
}

export default ScheduleTableGenerator;
