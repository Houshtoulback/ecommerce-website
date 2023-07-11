export default function NavItem (props: {content: string, link: string}) {
    const {content, link} = props;
    
    return (
        <div className="p-5 font-bold text-lg text-white">
            <a href={link}>{content}</a>
        </div>
    )
}
