package com.Welcome.Welcome.Deck.Controller;

import com.Welcome.Welcome.Deck.Entity.Employee;
import com.Welcome.Welcome.Deck.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/employee")
public class EmployeeController {

    private EmployeeService employeeService;
    @Autowired
        public EmployeeController(EmployeeService employeeService) {
            this.employeeService = employeeService;
        }
    @GetMapping("/all")
        public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployee();
            return new ResponseEntity<>(employees, HttpStatus.OK);
        }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
        public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
            Employee createdEmployee = employeeService.createEmployee(employee);
            return new ResponseEntity<>(createdEmployee,HttpStatus.CREATED);
        }


        @CrossOrigin(origins = "http://localhost:3000")
        @PutMapping("/update/{id}")
        public  Employee updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployeeDetail){
           return  employeeService.updateEmployee(id, updatedEmployeeDetail);

        }



    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.getEmployeeById(id);
            if(employee != null){
                return new ResponseEntity<>(employee, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
    }
}
