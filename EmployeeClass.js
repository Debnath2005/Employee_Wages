class Employee {
    constructor(name, id) {
      this.name = name;       
      this.id = id;           
      this.attendance = getRandom(); 
      
    }   

    displayInfo() {
      console.log(`Employee Name: ${this.name}, ID: ${this.id} `);
    }

  }
  
function getRandom() {
    return Math.floor(Math.random() * 2);
}


const emp1 = new Employee("Priyanshu Kumar", 101);
  emp1.displayInfo();
const emp2 = new Employee("Mohan Ram ", 102);
  emp2.displayInfo();