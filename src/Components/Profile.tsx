import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../App.css'

interface Profile {
  id: number;
  name: string;
  username: string;
}

const Profile: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [noData ,setNoData] =useState(false)

  const LIMIT = 5;
  const API_URL = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${LIMIT}`;

  const fetchProfiles = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      if(data.length ===0){
        setNoData(true)
      }
      if(profiles.length>0){
        setProfiles((prev)=> [...prev, ...data]);
      }else{
        setProfiles(data)
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(()=>{
    fetchProfiles();
  },[page])

   useEffect(()=>{
    window.addEventListener("scroll", handleIntersection);
    return ()=> window.removeEventListener("scroll",handleIntersection)
   },[])
  const handleIntersection = async() => {
    try{
      if(window.innerHeight+document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
        setPage((prev)=>prev+1)
      }

    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="list">
      {profiles.map((profile) => (
        <div key={profile.id} className="avatar_container">
          <img className='avatar'
            src={`https://avatars.dicebear.com/api/avataaars/${profile.username}.svg`}
            alt={`Avatar for ${profile.name}`}
          />
          <h2>{profile.name}</h2>
          <p>{profile.username}</p>
        </div>
      ))}
      {isLoading && <div className="loading-indicator">Loading...</div>}
        {noData && <div className='nodata'>No data available</div>}
    </div>
  );
};
export default Profile;