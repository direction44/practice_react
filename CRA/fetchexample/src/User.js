import { useEffect, useState } from "react";
import "./User.css";

export default function User() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error with the status ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setData(null);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>All Users:</h1>
            {loading && <h4>Data is Loading...</h4>}
            {error && <h2>{`There is a problem in fetching user data: ${error}`}</h2>}
            <div className="user-container">
                {data &&
                    data.map((user) => (
                        <div className="user-box" key={user.id}>
                            <h3>{user.name}</h3>
                            <h3>{user.email}</h3>
                            <h3>{user.phone}</h3>
                        </div>
                    ))}
            </div>
        </>
    );
}
