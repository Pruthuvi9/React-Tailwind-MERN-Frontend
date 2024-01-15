import { useState } from "react";

import Users from "./user/pages/Users";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return <Users />;
}

export default App;
