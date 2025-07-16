import axios from "axios"
import './globals.css';
async function getUserDetails(){
  const response = await axios.get('http://localhost:3000/api/user')   
  return response.data;

}

export default async function Home() {
  return <div>
    homepage
  </div>
}
 
