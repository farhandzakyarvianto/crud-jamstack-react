import React, { useEffect, useState } from "react";
import LinkList from "./components/LinkList";
import LinkForm from "./components/LinkForm";

function App() {
    const [links, setLinks] = useState([]);
    const LoadLinks = async () => {
        try {
            const res = await fetch("/api/getLinks");
            const links = await res.json();
            setLinks(links);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        LoadLinks();
    }, []);
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">List</h1>
            <LinkForm refreshLinks={LoadLinks} />
            <LinkList links={links} refreshLinks={LoadLinks} />
        </div>
    );
}

export default App;
