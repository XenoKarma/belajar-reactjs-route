import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate();

    function handleClick(){
        navigate({
            pathname: "/data",
        });
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home Page!</p>
            <button onClick={handleClick} >Go to Data</button>
        </div>
    )
}