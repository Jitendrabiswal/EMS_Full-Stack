package Employee_Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Employee_Management.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	

}
