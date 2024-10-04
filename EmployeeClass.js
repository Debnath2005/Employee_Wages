class Employee {
    constructor(name, id) {
      this.name = name;       
      this.id = id;           
      this.attendance = getRandom(); 
      this.Wages=null;
    }   

    EmployeeAttendence(){
      if(this.attendance){
        return  "Employee is present.";
      }
      else{
          return "Employee is Absent";
      }
    }

   DailyWages(){
    let hours=8;
    let wages=0
    let wagePerHour=20;
    if(this.attendance){
      wages=hours*wagePerHour
      return wages
    }
    else{
      return 0;
    }
  }

    displayInfo() {
      console.log(`Employee Name: ${this.name}, ID: ${this.id} , Attendance: ${this.EmployeeAttendence()} , Wages: ${this.DailyWages()}`);
    }

  }
  
function getRandom() {
    return Math.floor(Math.random() * 2);
}


const emp1 = new Employee("Priyanshu Kumar", 101);
  emp1.displayInfo();
const emp2 = new Employee("Mohan Ram ", 102);
  emp2.displayInfo();