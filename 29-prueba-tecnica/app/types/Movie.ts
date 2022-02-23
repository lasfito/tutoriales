export interface Movie {
    name: string;
    description: string;
    year: number;
    likes: number;
    dislikes: number;
    reviews: Review[];
    id: number;
    duration: number;
    photoUrl: string;
    hasLiked?: boolean;
    hasDisliked?: boolean;
}

export interface Review {
    comment: string;
    author: string;
    createdAt: number;
}