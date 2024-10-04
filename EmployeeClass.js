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
    if(this.attendance==2){
      let hours=8;
      let wages=0
      let wagePerHour=20;
      if(this.attendance){
        wages=hours*wagePerHour
        this.Wages=wages
        return `Full Time ${wages} $`
      }
    }
    else if(this.attendance==1){
      let hours=4;
      let wages=0
      let wagePerHour=20;
      if(this.attendance){
        this.Wages=wages
        wages=hours*wagePerHour
        return `Part Time ${wages} $`
      }
    }
    else{
      this.Wages=0
      return "Absent 0 $"
    }
    
  }

    displayInfo() {
      console.log(`Employee Name: ${this.name}, ID: ${this.id} , Attendance: ${this.EmployeeAttendence()} , Wages: ${this.DailyWages()}`);
    }
}
  
function getRandom() {
    return Math.floor(Math.random() * 3);
}






const emp1 = new Employee("Priyanshu Kumar", 101);
  emp1.displayInfo();
const emp2 = new Employee("Mohan Ram ", 102);
  emp2.displayInfo();