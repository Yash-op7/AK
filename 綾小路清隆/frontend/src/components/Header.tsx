const Header = () => {
    const image_path = `/images/blue-flame${Math.ceil(Math.random()*6)}.gif`
    return (
        <div className="text-cyan-300 text-xl flex flex-row justify-center items-center">
        <img className="h-20 w-20" src={image_path} />
          SOLO LEVELING
          <img className="h-20 w-20" src={image_path} />
        </div>
    )
}

export default Header;