const Header = ( { title } ) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// Default props - let us values for props expedcted in component. If not provided, default vaue takes over instead of error
// Good way to spec component and not receinvg data from API or local storage
Header.defaultProps = {
    title : "Default List"
}



export default Header;
