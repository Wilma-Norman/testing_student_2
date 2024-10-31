import SubTitle from "../SubTitle"

const Head = () => {
    return(
        <header className=' flex justify-center items-center p-5 bg-blue-400 flex-col'>
            <h1 className='text-5xl flex justify-center text-white'>Guest Book</h1>
            <SubTitle text="Leave a message down below..." />
        </header>
    )
}

export default Head