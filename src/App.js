import "./App.css";
import { rudderInitialize, rudderanalytics } from "./rudder";

function App() {
  const eventEnum = {
    "Order-Clicked": "Order-Clicked",
    "Order-Placed": "Order-Placed",
  };

  const handleTrack = () => {
    const trackEvent = rudderanalytics.track(
      eventEnum["Order-Clicked"],
      {
        eventData: {
          itemId: 12,
          itemName: "Pizza",
        },
        eventType: eventEnum["Order-Clicked"],
        userDetails: {},
      },
      () => {
        console.log("track call");
      }
    );
  };

  return (
    <div>
      <button onClick={rudderInitialize}>Initialize</button>
      <button onClick={handleTrack}>Track</button>
    </div>
  );
}

export default App;
