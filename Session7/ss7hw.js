window.onload = async () => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
        const data = await response.json()
        let names = document.getElementById("names")

        for (let i = 0; i < data.length; i++) {
                names.innerHTML += `<li id="names-${i}">${data[i].employee_name}</li>`
        }


        for (let i = 0; i < data.length; i++) {
                let employee_salary = document.getElementById("employee_salary")
                let names = document.getElementById(`names-${i}`);
                names.addEventListener("mouseover", () => {
                        employee_salary.innerHTML = ""
                        let employeeSal =`<span> Salary: ${data[i].employee_salary}</span>`
                        employee_salary.innerHTML += employeeSal
                })
        }
}

