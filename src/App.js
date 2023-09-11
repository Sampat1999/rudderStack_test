import "./App.css";
import { rudderIntialize, rudderanalytics } from "./rudder";

function App() {
  const eventEnum = {
    "Order-Clicked": "Order-Clicked",
    "Order-Placed": "Order-Placed",
  };
  const handleTrack = () => {
    const trackEvent = rudderanalytics.track(
      eventEnum["Order-Clicked"],
      {
        evertData: {
          itemId: 12,
          itemName: "Pizza",
        },
        eventType: eventEnum["Order-Clicked"],
        userDetails: {},
        // timeStamp: Date.now()
      },
      () => {
        console.log("track call");
      }
    );
  };
  return (
    <div>
      <button onClick={rudderIntialize}>Intialize</button>
      <button onClick={handleTrack}>Track</button>
    </div>
  );
}

export default App;
