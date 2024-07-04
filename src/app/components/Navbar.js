import Link from 'next/link';



function Navbar () {

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link href="/">
                        MICROFIY</Link>
                </li>
                <li>
                    <Link href="./Profile">
                        Profile</Link>
                </li>
                <li>
                    <Link href="./Shopping">
                        Shopping</Link>   
                </li>
                <li>
                    <Link href="./Cart">
                        Cart</Link>
                </li>
                <li>
                    <Link href="./About">
                        About</Link>
                </li>
                <li>
                    <div className="searchbar">
                        <input
                            type="text"
                            name="search"
                            id="search" />
                        <button className="search-btn">
                            Search
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
};


export default Navbar;