import axios from "axios";


export async function getHome(setPost,setLoading) {
      try {
    setLoading(true)
        const response = await axios.get("https://698f8357dcc9a4df204acb8a.mockapi.io/posts");
        setPost(response.data); 
    setLoading(false)
    } catch (error) {
        console.error(error);
    }
    
}