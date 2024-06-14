import _Category from "./_Category";

export default interface _Post {
    category: _Category;
    title: string;
    content: string;
    tags: string[];
    date_started: string;

    thumbnail?: string;
    description?: string;
    date_finished?: string;
    github?: string;
}