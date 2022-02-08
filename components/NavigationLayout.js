import Navbar from "./Navbar";
import Head from "next/head";
export function NavigationLayout ({ children, title }) {
    return (
        <>
            <Head>
                <title>{title} | Next.js Blog</title>
            </Head>
            <div className="wrapper">
                <Navbar />
                    <main>
                        {children}
                    </main>  
            </div>
        </>
    )
}