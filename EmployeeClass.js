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


  DailyWagesUsingSwitchCase(){
    const checkAttendence=this.attendance;
    let wages=0
    switch (checkAttendence) {
      case 0:
        return  this.wageAbsent()
        break;
      case 1:
        return this.wageHalfTime()
        break;
      case 2:
        return this.wageFullTime()
      default:
        break;
    }
  }

  wageFullTime(){
    let fulltime=8
    let ratePerHour=20
    let wage= fulltime*ratePerHour
    this.Wages=wage;
    console.log(wage);
    
    return wage;
  }
  
  wageHalfTime(){
    let halftime=4
    let ratePerHour=20
    let wage= halftime*ratePerHour
    this.Wages=wage;
    return wage;
  }
  
  wageAbsent(){
    let time=0
    let ratePerHour=20
    let wage= time*ratePerHour
    this.Wages=wage;
    return wage;
  }

    displayInfo() {
      console.log(`Employee Name: ${this.name}, ID: ${this.id} , Attendance: ${this.EmployeeAttendence()} , Wages: ${this.DailyWages()} , wageUsingSwitchCase: ${this.DailyWagesUsingSwitchCase()}`);
    }
}
  
function getRandom() {
    return Math.floor(Math.random() * 3);
}






const emp1 = new Employee("Priyanshu Kumar", 101);
  emp1.displayInfo();
const emp2 = new Employee("Mohan Ram ", 102);
  emp2.displayInfo();