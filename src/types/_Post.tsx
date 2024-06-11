export default interface _Post {
    type: "project" | "career" | "algorithm" | "theory";
    title: string;
    content: string;
    tags: string[];
    date_started: string;

    description?: string;
    date_finished?: string;
    github?: string;
}