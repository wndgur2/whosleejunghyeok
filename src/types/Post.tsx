export default interface Post {
    type: "project" | "career" | "algorithm" | "theory";
    title: string;
    tags: string[];
    date_started: string;

    description?: string;
    date_finished?: string;
    github?: string;
}