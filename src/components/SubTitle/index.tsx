type SubtitleProps = {
    text: string
}
 
const SubTitle= ({text}:SubtitleProps) => {
    return (
        <h3 className="text-1xl text-pink-400 pt-4 font-light">{text}</h3>
    )
}
export default SubTitle;