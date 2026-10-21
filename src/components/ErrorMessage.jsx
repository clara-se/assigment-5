export default function ErrorMessage({ message }) {           // like that we get the readable error text from App as a prop
  return <p className="status error" >{message}</p>;  
}