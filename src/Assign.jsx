function Assign(){

    const student = {"name":"Rahul","age":21}   // problem 1
    const product = {"proName":"wireless mouse","quntity":3,"price":499}
    const stud = {"name":"Anjali","isPresent":true }
    const fullName = {"fName":"Amit","lName":"sharma"}
    const loan = {"loanAmount": 500000,"interestRate": 8,"tenureYears": 5}
    const sub =  { "name": "Priya", "subjects": ["Math", "Science", "English"] }
    const emp =  {  "employeeName": "Suresh","basic": 25000,"hra": 10000}
    const prod = {"item": "Smartphone","price": 20000,"discount": 10}
    const price =  {"orderId": "ORD1234","customer": "Meena","items": 4,"totalPrice": 3200 }
    const report = {"city":"Mumbai","temp":30}
  
    return (
        <>
            <h2>1. Student Info</h2>
            <p>Hello,{student.name} your age is {student.age}</p>
            <hr />

            <h2>2. Product Info</h2>
            <p>Product name :{product.proName} <br />
               Product quntity : {product.quntity} <br />
               Price per unit : {product.price} <br />
               Total amount : ({ product.quntity * product.price })
            </p>
            <hr />

            <h2>3. Conditional Attendance Status</h2>
            <p>
                Student Name : {stud.name} <br />
                {stud.isPresent? <h3>Present</h3> : <h3>Absent</h3>}
            </p>
            <hr />

            <h2>4. Full Name Formatting</h2>
            <p>Your Name is : {fullName.fName} {fullName.lName}</p>
            <hr />

            <h2>5. Loan EMI Display</h2>
            <p>Loan Amount : {loan.loanAmount} <br />
               Loan Interest : {loan.interestRate} <br />
               Tenure Years : {loan.tenureYears} <br />
               EMI : {[loan.loanAmount* loan.interestRate / (12*100) * (1+loan.interestRate)^loan.tenureYears * 12] / [(1+loan.interestRate)^loan.tenureYears - 1]}
            </p>
            <hr />

            <h2>6. Favorite Subjects List</h2>

            <p>
                <ul>
                {sub.subjects.map((s)=>(
                    <li>{s}</li>                    
                ))}
                </ul>
            </p>
            <hr />

            <h2>7.  Employee Salary Breakdown</h2>
                <p>
                Basic Salary : {emp.basic} <br />
                HRA : {emp.hra} <br />
                Total Salary : {emp.basic + emp.hra}
                </p>
                <hr />

            <h2>8. Product Discounted Price</h2>
                <p>
                    Original Price : {prod.price} <br />
                    Discount Percentage : {prod.discount}% <br />
                    Final Price : {prod.price - (prod.price * prod.discount /100 )}
                </p>
                <hr />

            <h2>9. Online Order Summary</h2>
            <p>
                Order Id: {price.orderId} <br />
                Customer Name : {price.customer} <br />
                Items : {price.items} <br />
                Total Price : {price.items * price.totalPrice}
            </p>
            <hr />

            <h2>10. Weather Report</h2>
            <p>
                City Name : {report.city} <br />
                Temp in C: {report.temp} <br />
                Temp in F: { (report.temp * 9/5) + 32}
            </p>
            
        </>
    )
}

export default Assign