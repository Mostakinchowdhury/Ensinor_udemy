import { Head } from '@inertiajs/react';

export default function About({ user }: { user?: { name: string } }) {
    return (
        <div>
            <Head title="Welcome" />
            <h1>Welcome</h1>
            <p>
                Hello {user?.name || 'not found'}, welcome to your first Inertia
                app!
            </p>
        </div>
    );
}
