type SubtitleProps = {
    text: string
}
 
const SubTitle= ({text}:SubtitleProps) => {
    return (
        <h3 className='text-2xl text-white'>{text}</h3>
    )
}
export default SubTitle;