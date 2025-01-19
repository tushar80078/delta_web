import { HashRouter } from "react-router-dom";
import Root from "./navigation";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <HashRouter>
      <Toaster position="top-center" />
      <Root />
    </HashRouter>
  )
}

export default App