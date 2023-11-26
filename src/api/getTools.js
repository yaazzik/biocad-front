export async function getTools() {
  try {
    const res = await fetch('http://localhost:8080/getTools')
      .then((response) => response.json())
    return res
  }
  catch (e) {
    console.log(e);
  }
}
