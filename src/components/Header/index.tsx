import SubTitle from "../SubTitle"

const Head = () => {
    return(
        <header className='text-center m-0 p-8 bg-blue-200'>
            <h1 className='text-4xl font-bold text-pink-600 mb-2 tracking-wide'>Guest Book</h1>
            <SubTitle text="Leave a message down below..." />
        </header>
    )
}

export default Head