import React, {useEffect, useState} from "react";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      form: {
        name : "",
        age: "",
        address: ""
      }
    }

    this.setField = this.setField.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(){
    const user = this.state.form;
    const new_users = this.state.users;
    new_users.push(user);

    this.setState({
      users : new_users,
      form :{
        name : "",
        age: "",
        address: ""
      }
    })
  }

  setField(field, val){
    const new_form = this.state.form;
    new_form[field] = val;
    this.setState({
      form: new_form
    });
  }


  render() {
    return <>
      <div>
        <form>
          <input placeholder="Full Name" value={this.state.form.name} onChange={e=>this.setField("name", e.target.value)}/>
          <input placeholder="age" value={this.state.form.age} onChange={e=>this.setField("age", e.target.value)}/>
          <input placeholder="address" value={this.state.form.address} onChange={e=>this.setField("address", e.target.value)}/>

          <button type="button" onClick={this.handleAddUser}>Save</button>

        </form>
      </div>

      <table>
        <tbody>
        {
          this.state.users.map((user, index)=>{
            return <tr key={index}>
              <td>{user.name}</td>
            </tr>
          })
        }
        </tbody>
      </table>
    </>
  }
}

export default function Home2() {
  const [form, setForm] = useState({name: "", age: "", address:""});
  const [data, setData] = useState([]);

  const setFormValue = (field, value)=>{
    setForm({
      ...form,
      [field]: value
    })
  }

  const saveData = () =>{
    setData([...data, form]);
    setForm({name:"", age: "", address: ""})
  }
  return <>
    <h3>Add New User</h3>
    <div>
      <input value={form.name} onChange={e=>setFormValue("name", e.target.value)}/>
      <input value={form.age} onChange={e=>setFormValue("age", e.target.value)}/>
      <input value={form.address} onChange={e=>setFormValue("address", e.target.value)}/>
      <button onClick={saveData}>Save</button>
    </div>

    <h3>Users</h3>
    <div>
      <table border={1} style={{borderCollapse: 'collapse'}} width="100%">
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((user, index)=><tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.address}</td>
          </tr>)
        }
        </tbody>
      </table>
    </div>
    </>
}