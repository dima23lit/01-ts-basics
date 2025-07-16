import axios from "axios";

interface Post {
    id: Number;
    title: String;
    body: String;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts);
});