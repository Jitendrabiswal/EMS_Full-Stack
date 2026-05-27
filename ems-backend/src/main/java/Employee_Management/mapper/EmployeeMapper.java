package Employee_Management.mapper;

import Employee_Management.dto.Employeedto;
import Employee_Management.entity.Employee;

public class EmployeeMapper {
	
	public static Employeedto maptoemployeedto(Employee employee) {
		 return new Employeedto(
	               	employee.getId(),
	                employee.getFirstname(),
	                employee.getLastname(),
	                employee.getEmail()
	        );
	}
	
	public static Employee maptoemployee(Employeedto employeedto) {
		return new Employee(
				employeedto.getId(),
				employeedto.getFirstname(),
				employeedto.getLastname(),
				employeedto.getEmail()
				);
	}

}
