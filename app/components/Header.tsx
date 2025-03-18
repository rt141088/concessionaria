import Link from "next/link";

function Header() {
    return (
        <>
            <header className="bg-green-500 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3x1 font-bold"> RT  CAR</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li> <Link href="/">HOME</Link> </li>


                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;