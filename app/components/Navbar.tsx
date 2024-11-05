import Link from "next/link"
export default function Navbar(){
return (
    <header
    style= {{
        backgroundColor: "Blue",
        color: "White"}}
    >
        <nav>
            <ul>
                <li
                style= {{
                    color: "White"
                        }}
                >
                    <Link href = "/catogery/crypto">crypto</Link>
                    </li>
                    <li
                style= {{
                    color: "White"
                        }}
                        >
                        <Link href = "/products/product1">Laptop</Link>

                </li>
            </ul>
        </nav>
    </header>
)
}