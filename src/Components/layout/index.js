function Layout({ children }) {
    return (
        <div className="antialiased font-sans tracking-tighter flex items-center justify-center min-h-screen bg-gray-200">
            {children}
        </div>
    );
}

export default Layout;
