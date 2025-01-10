export interface ButtonProps {
    label: string,
    iconUrl?: string
    className? : string
}

type Shoe = {
    thumbnail: string;
    bigShoe: string;
}

export interface ShoeCardProps {
    imgUrl:  Shoe
    changeBigShoeImage : ( shoe : string)  => void
    bigShoeImage : string
}

export interface PopularProductCardProps {
    imgURL: string;
    name: string;
    price: string;
}

export interface ServiceCardProps {
    imgURL: string;
    label: string;
    subtext: string;
}

export interface ReviewCardProps {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
}