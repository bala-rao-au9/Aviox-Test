import React, { useState } from 'react';
import {  Table } from 'reactstrap'
import 'react-responsive-modal/styles.css';
import * as ReactBootStrap from "react-bootstrap";
import { Modal } from 'react-responsive-modal';
import Form from './Form'

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []


const List = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false, window.location.reload());
  
  return(
  <div>
    <ReactBootStrap.Table stripped bordered hover>
      <thead>
        <tr>
          <th><i>Office Transactions</i></th>
          <th></th>
          <th></th>
          <th></th>
          <th><button onClick={onOpenModal}><i>+ Add Transaction</i></button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th > Date </th>
          <td> Description </td>
          <td> Credit </td>
          <td> Debit </td>
          <td> Running Balance </td>
        </tr>

          {ALL_EXPENSES.map(item =>(
            <tr>
            <td>{item.date}</td>
            <td key="name">{item.name}</td>
            <td key="Credit">{item.lastClicked==="Credit"?item.amount:"-"}</td>
            <td key="Debit">{item.lastClicked==="Debit"?item.amount:"-"}</td>
            <td>{item.amount}</td>
            </tr>
        ))}
      </tbody>
      
    </ReactBootStrap.Table>
    
    <Modal open={open} onClose={onCloseModal}  center>
      <Form />
      
    </Modal>
  </div>
  )
}

export default List