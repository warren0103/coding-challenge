import Header from "./navigation";

const Layout = ({children})=> {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout