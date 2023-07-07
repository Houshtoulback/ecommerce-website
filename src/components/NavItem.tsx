export default function NavItem ({content, link}) {
    return (
        <div className="p-5 font-bold text-lg text-white">
            <a href={link}>{content}</a>
        </div>
    )
}
