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