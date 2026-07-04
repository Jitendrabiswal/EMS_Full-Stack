package Employee_Management.controller;

import Employee_Management.repository.EmployeeRepository;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import Employee_Management.dto.Employeedto;
import Employee_Management.service.EmployeeService;

@RestController
@RequestMapping("/emp")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;

	
	
	@PostMapping("/saveddata")
	public ResponseEntity<Employeedto> saveddata(@RequestBody Employeedto employeedto){
		Employeedto edt=employeeService.saveemployee(employeedto);
		return new ResponseEntity<Employeedto>(edt,HttpStatus.CREATED);
		
	}
	
	
	//fetch data based on id
	@GetMapping("/getid/{id}")
	public ResponseEntity<Employeedto> fetchDataBasedOnId(@PathVariable int id){
		Employeedto emp=employeeService.getemployeebasedonid(id);
		return new ResponseEntity<Employeedto>(emp, HttpStatus.OK);
	}
	//fetch all data
	@GetMapping("findall")
	public ResponseEntity<List<Employeedto>> fetchdata(){
		List<Employeedto> edt=employeeService.getallemployee();
		return new ResponseEntity<>(edt,HttpStatus.OK);
	}
	
	//update data
	@PutMapping("/update/{id}")
	public ResponseEntity<Employeedto> updatedata(@PathVariable int id,@RequestBody Employeedto employeedto){
		Employeedto edt=employeeService.updatedata(id, employeedto);
		return new ResponseEntity<Employeedto>(edt, HttpStatus.CREATED);
	}
	
	
	//delete data
	@DeleteMapping("/delete/{id}")
	
	public ResponseEntity<String> deletedata(@PathVariable int id){
		
		employeeService.deletedata(id);
		
		return new ResponseEntity<>("data delete succesfully", HttpStatus.OK);
		
	}
	
	
	
	
}
