import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import ProfilePage from "./pages/profilepage/ProfilePage.tsx";
import LoginPage from "./pages/loginpage/LoginPage.tsx";


function App() {

  return (
    <>
      <Routes>
        <Route path={"/login"} element={<LoginPage/>}/>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
