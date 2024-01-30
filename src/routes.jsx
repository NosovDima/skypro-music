import { Route, Routes } from "react-router-dom"
import { Main } from "./pages/main"
import { About } from "./pages/about"
import { NotFound } from "./pages/not-found"
import { Category } from "./pages/category/index.jsx"
// import { Account } from "./pages/account"
import { ProtectedRoute } from "./components/protected-route"
import { Login } from "./pages/login/Login.jsx"
import { Registration } from "./pages/Registration/Registration.jsx"
import { MyPlaylist } from "./pages/myplaylist/MyPlaylist.jsx"

export const AppRoutes = ({ user, onClick }) => {
    return (
        <Routes>
            <Route path="/login" element={<Login onClick={onClick} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:id" element={<Category />} />
            <Route
            path="/account"
            element={
                <ProtectedRoute isAllowed={Boolean(user)}/>}>
            
            <Route path="/MyPlaylist" element={<MyPlaylist />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<Main />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
