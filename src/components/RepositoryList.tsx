import { useEffect, useState } from 'react';
import RepositoryItem, { Repository } from './RepositoryItem';

export default function RepositoryList() {
    const [repoList, setRepoList] = useState<Repository[]>([]);
    const [username, setUsername] = useState('');
    const [notFound, setNotFound] = useState(false);

    function listRepos() {
        if (username) {
            fetch(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `Basic ${process.env.REACT_APP_AUTH_TOKEN}`,
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.length > 0) {
                        setRepoList(data);
                        setNotFound(false);
                    } else {
                        setRepoList([]);
                        setNotFound(true);
                    }
                });
        }
    }

    return (
        <section className="m-10">
            <h2 className="text-2xl font-bold text-blue-500">
                Lista de repositórios
            </h2>

            <label className="block mt-2">
                <p className="text-xl font-semibold">
                    Insira um nome de usuário
                </p>
                <input
                    type="text"
                    className="px-2 py-1 mt-2 border-2 border-gray-600 rounded-xl"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button
                    type="button"
                    onClick={listRepos}
                    className="inline-block px-2 py-1 ml-2 text-white border-2 border-transparent text bg-sky-600 rounded-xl"
                >
                    Pesquisar
                </button>
            </label>

            <ul className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {repoList.length > 0 &&
                    repoList.map((repo, index) => {
                        return (
                            <RepositoryItem
                                repository={repo}
                                className=""
                                key={repo.name}
                            />
                        );
                    })}
                {notFound && <div>Usuário não encontrado</div>}
            </ul>
        </section>
    );
}
