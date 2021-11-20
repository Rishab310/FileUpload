import './App.css';

import {useState} from 'react';
import {storage} from './firebase';
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [image , setImage] = useState({});
  const upload = ()=>{
    if(image == null)
      return;
    uploadBytes(ref(storage, `images/${image.name}`), image).then((snapshot) => {
      alert("Successfully uploaded!!");
      console.log('Uploaded a blob or file!');
      console.log(snapshot);
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div className="App">
      <div style={{margin:"auto", marginTop:"100px"}}>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button>
      </div>
    </div>
  );
}

export default App;
