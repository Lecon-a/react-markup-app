import { footerLinks } from "../../appContant/TextContant"

const Footer = () => {
    return (
        <footer className="p-4 bg-dark text-white">
            <footer className="flex items-center justify-between">
                {/* TODO add brand here  */}
                <a className="text-2xl text-yellow" href="">Welly</a>
                <div>
                    {footerLinks.map(link => <a className="mr-4 lowercase" key={link} href={`/${link}`}>{link}</a>)}
                </div>
            </footer>
        </footer>
    )
}

export default Footer