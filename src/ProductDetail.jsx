import { useParams } from "react-router"

export default function ProductDetail() {
    const params = useParams();
    
    return (
        <>
            <h1>Product Detail {params.id}</h1>
            <p>product detail page</p>
        </>
    )
}