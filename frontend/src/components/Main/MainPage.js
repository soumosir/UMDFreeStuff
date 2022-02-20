
import SearchAppBar from "../Navbar/SearchAppBar";
import EventsList from "../EventsList/EventsList";

function MainPage() {
  return (
    <div>
        <SearchAppBar/>
        <div style={{ padding:"10px",margin: "auto" }}>
            <EventsList/>
        </div>
    </div>
    
  );
}

export default MainPage;