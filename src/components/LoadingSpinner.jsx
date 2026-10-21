export default function LoadingSpinner({ city }) {            // like that it will get the city from App as a prop
  return <p className="status loading" >⏳ Loading {city}…</p>;  // {city} puts the variable inside the text
}