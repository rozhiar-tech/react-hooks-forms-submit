import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitedData,handleSubmit]=useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(firstName);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  // function handleSubmiting(event) {
  //   event.preventDefault();
  //   const formData = { firstName: firstName, lastName: lastName };
  //   const dataArray = [...submitedData, formData];
  //   handleSubmit(dataArray);
  //   setFirstName("");
  //   setLastName("");
  // }

  // const listOfSubmissions = submitedData.map((data, index) => {
  //   return (
  //     <div key={index}>
  //       {data.firstName} {data.lastName}
  //     </div>
  //   );
  // });
  function handleSubmitt(event) {
    event.preventDefault();
    const fullName={
      firstName:firstName,
      lastName:lastName,
    }
    const dataArray=[...submitedData,fullName]
    handleSubmit(dataArray);

    setFirstName('')
    setLastName('')

  }

  const listofNames= submitedData.map((names,index)=>{
    return(
      <div key={index}>
        <h1>{names.firstName}</h1>
        <h2>{names.lastName}</h2>
      </div>
    )
  });
  return (
    <div>
    <form onSubmit={handleSubmitt}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {listofNames}
    </div>
  );
}

export default Form;
