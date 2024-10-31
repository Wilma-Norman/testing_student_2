import SubTitle from "../SubTitle"

const Head = () => {
    return(
        <header className="bg-white mb-6 p-6 rounded-b-lg shadow-md border-b-2 border-pink-300 transition-transform hover:scale-105 duration-300">
            <h1 className="text-4xl font-bold tracking-wide mb-2 text-pink-600">Guest Book</h1>
            <SubTitle text="Leave a message down below..." />
        </header>
    )
}

export default Head