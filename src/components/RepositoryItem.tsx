export interface Repository {
    name: string;
    description: string;
    html_url: string;
}

interface RepositoryItemProps {
    repository: Repository;
    className: string;
}

export default function RepositoryItem({
    repository,
    className,
}: RepositoryItemProps) {
    return (
        <li
            className={`block bg-white px-4 py-2 rounded-xl shadow ${className}`}
        >
            <strong>{repository.name}</strong>
            <p className="mt-2 text-gray-600">{repository.description}</p>
            <a
                href={repository.html_url}
                className="inline-block px-2 py-1 mt-2 font-bold text-gray-200 uppercase rounded-full bg-sky-500"
            >
                Ver
            </a>
        </li>
    );
}
