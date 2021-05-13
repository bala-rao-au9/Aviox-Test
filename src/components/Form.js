import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";
import Alert from 'react-bootstrap/Alert'


var today = new Date();

var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();



const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []


const Form = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [lastClicked, setLastClicked] = useState('');
  const [total, setTotal] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  

  const [expenses, setExpenses] = useState(ALL_EXPENSES)
  
const handleAmount = event => {
  console.log('Amount ', event.target.value)
  setAmount(event.target.value)
}



const handleSubmitForm = event => {
  event.preventDefault()
  if(lastClicked==="Credit")
{
 
  setTotal( total+ parseInt(amount))
  console.log(total)

}else{
  
  setTotal(total - parseInt(amount))
  console.log(parseInt(amount))
 
}
 
  if (name !== '' && amount > 0) {
    
    const expense = { name, amount, lastClicked, date, total }
    
    setExpenses([...expenses, expense])
    
    

   
    setName('')
    setAmount('')
  } else {
    console.log('Invalid expense name or the amount')
  }
}


useEffect(() => {
  localStorage.setItem('expenses', JSON.stringify(expenses))
}, [expenses])




  
  
  const handleName = event => {
  console.log('Name ', event.target.value)
  setName(event.target.value)
  

}
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <h3 className="display-6 text-left">New Transaction</h3>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={3} style={{  marginRight: "30px" }}>
          Transaction Type
        </Label>
        <Col sm={4}>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {lastClicked || "Select an option "}
            </DropdownToggle>
            <DropdownMenu container="body">
              <DropdownItem onClick={() => {setLastClicked("Credit")
            }}>
                Credit
              </DropdownItem>
              <DropdownItem onClick={() => {setLastClicked("Debit")
              }
            }>
                Debit
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </FormGroup>


      <FormGroup className="row" >
        <Label for="exampleEmail" sm={2} style={{  marginRight: "30px" }}>
          Amount
        </Label>

        <Input
          style={{ width: "300px" }}
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
        </FormGroup>

        <FormGroup className="row">
        <Label for="exampleEmail" sm={2} style={{  marginRight: "30px" }}>
          Description
        </Label>

        <Input
          style={{ width: "300px" }}
          type="text"
          name="description"
          id="expenseName"
          placeholder="Description"
          value={name}
          onChange={handleName}
        />
      </FormGroup>
      <Button type="submit" color="primary"  >
        SAVE
      </Button>
    </BTForm>
  );
};

export default Form;
