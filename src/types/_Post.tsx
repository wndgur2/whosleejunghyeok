export default interface _Post {
    category: "project" | "career" | "algorithm" | "theory";
    title: string;
    content: string;
    tags: string[];
    date_started: string;

    thumbnail?: string;
    description?: string;
    date_finished?: string;
    github?: string;
}