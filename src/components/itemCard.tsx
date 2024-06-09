import React from "react";

interface itemCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const itemCard: React.FC<itemCardProps> = ({ id, name, price, imageUrl }) => {
    return (
        <div className="border rounded-lg shadow-md">
            <img src="{imageUrl}" alt="{name}" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">{price}</p>
            </div>
        </div>
    )
}
export default itemCard