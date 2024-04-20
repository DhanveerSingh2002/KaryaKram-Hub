const Layout = ({children}:{children : React.ReactNode}) => {
    return (
        <div className="flex-center min-h-screen w-full accent-black">
            {children}
        </div>
    )
}

export default Layout