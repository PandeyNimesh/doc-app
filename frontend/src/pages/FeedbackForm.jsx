import React, { useState } from "react";
import axios from "axios"; // Import Axios

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        query: "",
    });

    const [wordCount, setWordCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const maxWords = 200;

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "query") {
            const words = value.trim().split(/\s+/).filter(Boolean);
            if (words.length > maxWords) return;
            setWordCount(words.length);
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(`${backendUrl}+"/api/user/feedback`, formData);
            setMessage("Feedback submitted successfully! ");
            setFormData({ name: "", email: "", mobile: "", query: "" });
            setWordCount(0);
        } catch (error) {
            setMessage("Failed to submit feedback. ");
            console.error("Error submitting feedback:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">We Value Your Feedback</h2>
                <p className="text-gray-600 text-center mb-6">Please fill out the form below to share your feedback.</p>

                {message && (
                    <p className={`text-center mb-4 ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile No:</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Query (Max 200 words):</label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            required
                        />
                        <p className="text-right text-sm text-gray-500">{wordCount}/{maxWords} words</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold text-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FeedbackForm;
