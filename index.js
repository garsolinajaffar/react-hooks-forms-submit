function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState([]);
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if (firstName.trim() === "") {
        setErrors(["Please enter a first name."]);
        return;
      }
  
      if (lastName.trim() === "") {
        setErrors(["Please enter a last name."]);
        return;
      }
  
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }
  
    const listOfSubmissions = submittedData.map((data, index) => {
      return (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      );
    });
  
    const errorList = errors.map((error, index) => {
      return <li key={index}>{error}</li>;
    });
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" onChange={handleFirstNameChange} value={firstName} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" onChange={handleLastNameChange} value={lastName} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {errors.length > 0 && <ul>{errorList}</ul>}
        <h3>Submissions</h3>
        {listOfSubmissions}
      </div>
    );
  }
  