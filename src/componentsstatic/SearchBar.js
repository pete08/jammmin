import React, { useState } from "react";



export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleSubmit = (e) => {
        return;
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" id="searchbar" name="searchbar"/>
            <input type="submit" value="Search" />
        </form>
        <p> You're currently searching for: {searchTerm}</p>
        </div>
    );
}