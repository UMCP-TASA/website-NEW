import { Outlet, Link } from 'react-router'

export default function Layout() {
    return (
        <>
            <Link to="/">Home</Link> 
            <br></br>
            <Link to="/about">About</Link>
            <Outlet />
        </>
    );
}