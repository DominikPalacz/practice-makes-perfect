interface Comment {
    postId: number,
    name: string,
    email: string,
    body: string,
};

export type Comments = Comment[];