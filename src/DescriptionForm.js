import React, { useState } from 'react';
import './DescriptionForm.css';

const DescriptionForm = () => {
    const [description, setDescription] = useState('Initial value');
    const [submittedDescription, setSubmittedDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedDescription(description);
    };

    return (
        <div className="container">
            <h1>Submit Your Description</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    cols="50"
                    placeholder="Enter your description here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedDescription && (
                <div id="result">
                    <h2>Submitted Description:</h2>
                    <p>{submittedDescription}</p>
                </div>
            )}
        </div>
    );
};

export default DescriptionForm;