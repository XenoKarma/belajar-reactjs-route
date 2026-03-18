import { useParams } from "react-router";

export default function NotFound() {
    const params = useParams();
    return (
        <>
            <h1>Not Found : {params['*']}</h1>
            <p>page is not found</p>
        </>
    )
}