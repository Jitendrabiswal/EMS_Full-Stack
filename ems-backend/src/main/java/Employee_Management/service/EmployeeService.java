package Employee_Management.service;



import java.util.List;

import Employee_Management.dto.Employeedto;

public interface EmployeeService {
	
	public Employeedto saveemployee(Employeedto employeedto);
	
	public Employeedto getemployeebasedonid(int id);
	
	public List<Employeedto> getallemployee();
	
	public Employeedto updatedata(int id,Employeedto employeedto);
	
	
	public void deletedata(int id);
}
