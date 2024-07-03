import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link href="/">MICROFIY</Link>
                </li>

                <li>
                    <Link href="/pages/profile">Profile</Link>
                </li>

                <li>
                    <Link href="/pages/shopping">Shopping</Link>
                </li>

                <li>
                    <Link href="/pages/cart">Cart</Link>
                </li>

                <li>
                    <Link href="/pages/about">About</Link>
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