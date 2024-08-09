import { useState } from "react";
import Header from "./Header";

const Volunteer = () => {

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
}

    return(
        <>
        <Header/>
        <h1>Volunteer</h1>
        <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
        </>
    )
}

export default Volunteer