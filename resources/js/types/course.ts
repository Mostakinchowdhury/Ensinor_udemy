export type Course = {
    id: number;
    title: string;
    description: string;
    summary: string;
    conclusion: string;

    course_type: string;
    language: string;

    duration: number;
    lectures: number;

    price: number;
    certificate: number;

    deadline: string;

    published_at: string;
    created_at: string;
    updated_at: string;
    average_rating: number;
    total_rating: number;
    total_student: number;
};
