
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
     <District name="NoaKhali" special="bivag"></District>
     <District name='cumilla' special="town"></District>
     <District name="Dhaka" special="city"></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] =useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title ={post.title} body = {post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={{backgroundColor: 'lightSalmon', margin: '20px', border: "4px solid red"}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightBlue',
  margin: '20px',
  borderRadius: '20px',
  padding: '10px'
}

function District(props){
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }


  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
      <p>Specialty: {props.special}</p>
    </div>
  )


}
export default App;
