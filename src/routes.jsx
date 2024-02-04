import { Route, Routes } from "react-router-dom"
import { App } from "./App.jsx"
import { NotFound } from "./pages/Error/NotFound.jsx"
import { Category } from "./pages/Category/Category.jsx"
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx"
import { Login } from "./pages/Login/Login.jsx"
import { Registration } from "./pages/Registration/Registration.jsx"
import { MyPlaylist } from "./pages/Myplaylist/MyPlaylist.jsx"

export const AppRoutes = ({ user, onClick }) => {
    return (
        <Routes>
            <Route path="/Login" element={<Login onClick={onClick} />} />
            <Route path="/Registration" element={<Registration />} />
            <Route element={<ProtectedRoute isAllowed={Boolean(user)}/>}>
            <Route path="/MyPlaylist" element={<MyPlaylist />} />
            <Route path="/Category/:id" element={<Category />} />
            <Route path="/" element={<App />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
