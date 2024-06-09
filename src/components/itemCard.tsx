import React from "react";

interface itemCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const itemCard: React.FC<itemCardProps> = ({ id, name, price, imageUrl }) => {
    return (
        <div className="">
            <div className="">
                <h2 className="">{name}</h2>
                <p className="">{price}</p>
            </div>
        </div>
    )
}
export default itemCard