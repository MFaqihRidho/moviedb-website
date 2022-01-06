function Layout({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            {children}
        </div>
    );
}

export default Layout;
