import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import { useState } from "react";


function App() {
  // ** state
const [isOpen, setIsOpen] = useState(false);

// ** handler
// const open= ()=>setIsOpen(true);
const close= ()=>setIsOpen(false);
// ** rernder
  return (
    <>
    <div className="flex justify-center">
      <div className="container mx-auto px-24 ">
      <Navbar />
      <Button children="nabih" color="blue" type="submit"/>
      <br />
      <br />
      <Input type="text" placeholder="Enter your username" name="username" />
      <br />
      <br />
      <Modal isOpen={isOpen} onClose={close} title='nabih' description="jdfjsdfjkl" />
    </div>
    </div>
    </>
  );
}

export default App;
