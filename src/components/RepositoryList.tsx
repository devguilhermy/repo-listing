import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

export default function RepositoryList() {
    const repository = {
        name: 'React-Tailwind-Template',
        description:
            'Speed up your React.js and TailwindCSS project setup using this simple template',
        link: 'https://github.com/devguilhermy/react-tailwind-template',
    };

    const [repoList, setRepoList] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/devguilhermy/repos')
            .then((response) => response.json())
            .then((data) => setRepoList(data));
    }, []);

    return (
        <section className="m-10">
            <h2 className="text-2xl font-bold text-blue-500">
                Lista de repositórios
            </h2>

            <ul className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {repoList.map((repo) => {
                    return (
                        <RepositoryItem
                            repository={repo}
                            className=""
                            key={repository.name}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
