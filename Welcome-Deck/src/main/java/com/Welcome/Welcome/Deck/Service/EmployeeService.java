package com.Welcome.Welcome.Deck.Service;

import com.Welcome.Welcome.Deck.Entity.Employee;
import com.Welcome.Welcome.Deck.Repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployee(){
    return employeeRepository.findAll();
    }
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee updatedEmployeeDetails) {
        Employee existingEmployee = employeeRepository.findById(id).orElse(null);

        if (existingEmployee != null) {
            existingEmployee.setName(updatedEmployeeDetails.getName());
            existingEmployee.setContactMobile(updatedEmployeeDetails.getContactMobile());
            existingEmployee.setContactEmail(updatedEmployeeDetails.getContactEmail());
            existingEmployee.setHometown(updatedEmployeeDetails.getHometown());
            existingEmployee.setEducationQualification(updatedEmployeeDetails.getEducationQualification());
            existingEmployee.setExperience(updatedEmployeeDetails.getExperience());
            existingEmployee.setHobbies(updatedEmployeeDetails.getHobbies());
            existingEmployee.setCoreSkill(updatedEmployeeDetails.getCoreSkill());
            existingEmployee.setFavouriteQuote(updatedEmployeeDetails.getFavouriteQuote());
            existingEmployee.setAnotherProfession(updatedEmployeeDetails.getAnotherProfession());



            return employeeRepository.save(existingEmployee);
        } else {
            return null;
        }
    }


    public Employee getEmployeeById(Long id){
        return  employeeRepository.findById(id) .orElse(null);
    }
}
