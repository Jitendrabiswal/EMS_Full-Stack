package Employee_Management.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Employee_Management.dto.Employeedto;
import Employee_Management.entity.Employee;
import Employee_Management.exception.Idnotfoundexception;
import Employee_Management.mapper.EmployeeMapper;
import Employee_Management.repository.EmployeeRepository;

@Service
public class EmployeeServiceimpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employeedto saveemployee(Employeedto employeedto) {
		Employee e1=EmployeeMapper.maptoemployee(employeedto);
		Employee emp=employeeRepository.save(e1);
		
		return EmployeeMapper.maptoemployeedto(emp);
		
		
	}

	@Override
	public Employeedto getemployeebasedonid(int id) {
		Employee employee=employeeRepository.findById(id).orElseThrow(()->new Idnotfoundexception("employee not found on the basic of id: "+id));
		return EmployeeMapper.maptoemployeedto(employee);
	}

	@Override
	public List<Employeedto> getallemployee() {
		List<Employee> emp=employeeRepository.findAll();
		List<Employeedto>edt=emp.stream().map((i)->EmployeeMapper.maptoemployeedto(i)).collect(Collectors.toList());
		return edt;
	}

	@Override
	public Employeedto updatedata(int id, Employeedto employeedto) {
		
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new Idnotfoundexception("data not found on the basic of id "+id));
		
		emp.setFirstname(employeedto.getFirstname());
		emp.setLastname(employeedto.getLastname());
		emp.setEmail(employeedto.getEmail());
		
		Employee emp2=employeeRepository.save(emp);
		
		return EmployeeMapper.maptoemployeedto(emp2);
	}

	@Override
	public void deletedata(int id) {
		
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new Idnotfoundexception("data not found on the basic of id "+id));
		
		employeeRepository.delete(emp);
		
	}

}
