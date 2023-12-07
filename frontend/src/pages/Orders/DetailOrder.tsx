import React, {useState} from "react";
import { useParams } from 'react-router-dom'
// import "./MainPage.css"

export const DetailOrderPage: React.FC = ({}) => {
    const params = useParams<{ id: string }>()
    const [order, setOrder] = useState([])
    return (
        <>
        
        </>
    )
}