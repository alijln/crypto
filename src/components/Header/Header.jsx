import CSS from './header.module.css'

function Header() {
    return (
        <>
            <div className={CSS.header}>
                <div className={CSS.bar}><img src="./bar.svg" alt="" /></div>
                <h2 className={CSS.welcome}>Monitor Crypto Markets</h2>
                <div className={CSS.userPhoto}><img src="./user.jpg" alt="" /></div>
            </div>
            
            
        </>
    )
}

export default Header;