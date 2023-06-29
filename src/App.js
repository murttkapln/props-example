import Card from "./components/Card";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css"

function App() {
  // console.log(contacts);

  return (
    <div className="bg-dark text-light text-center w-100">
      <h2>Full Vitamin Stack Team</h2>
      {contacts.map((contact) => {
        const { id, name, imgURL, phone, email } = contact;
        return (
          
            <Card
            id={id}
              name={name}
              imgURL={imgURL}
              phone={phone}
              email={email}
            />
        
        );
      })}
    </div>
  );
}

export default App;
