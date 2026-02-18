import { ReactNode } from "react"
import "../Styles/globals.css"
import Navbar from "../components/shared/navbar"
import Footer from "../components/shared/footer"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}