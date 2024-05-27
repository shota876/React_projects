import { useEffect, useState } from "react" 
import User from "./User"
import './index.css'

export default function GithubProfileFinder(){
    const [userName, setUserName] = useState('shota876')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`http://api.github.com/users/${userName}`)
        const data = await res.json()

        if (data) {
          setUserData(data);
          setLoading(false);
          setUserName('')
        }

        console.log(data)
    }

    function handleSubmit() {
      fetchGithubUserData()
    }

    useEffect(() => {
      fetchGithubUserData()
    },[])

    if (loading) {
      return <h1>Loading data ! Please wait</h1>;
    }

    return (
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            name="search-by-username"
            placeholder="Search GitHub Username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData !== null ? <User user={userData} /> : null }
      </div>
    );
}