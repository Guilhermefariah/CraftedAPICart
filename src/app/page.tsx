import { GetStaticProps } from "next";
import itemCard from "@/components/itemCard";

interface PageProps {
    products: {
        id: string,
        name: string,
        price: number,
        imageUrl: string
    }[];
}

const Page: React.FC<PageProps> = ({ products }) => {
    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                test
            </div>
        </div>
    )
}
export default Page;