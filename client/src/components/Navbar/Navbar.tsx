type NavbarProps = {
    children: React.ReactNode
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar">
       <h1 className="navbar_heading"> {props.children} </h1>
    </div>
  )
}

export default Navbar