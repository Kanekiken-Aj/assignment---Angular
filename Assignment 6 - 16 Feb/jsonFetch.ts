async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  async function main() {
    try {
      const posts = await fetchData();
      console.log('Fetched posts:', posts);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();
  