"use client";

import React, { useState } from "react";
import { getFeedbackById } from "../../api/feedbackApi.ts";

export const FeedbackFilter = () => {
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await getFeedbackById(searchId);
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mt-10 p-6 border rounded-xl bg-zinc-50 shadow-sm">
      <h3 className="text-lg font-bold mb-4">Filter by ID</h3>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Feedback ID..."
          className="flex-1 px-3 py-2 border rounded-md text-sm"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text- px-4 py-2 rounded-md text-sm font-medium"
        >
          {loading ? "Searching..." : "Filter"}
        </button>
      </form>

      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

      {result && (
        <div className="mt-4 p-4 bg-white border rounded-md text-sm">
          <p>
            <strong>Name:</strong> {result.name}
          </p>
          <p>
            <strong>Email:</strong> {result.email}
          </p>
          <p>
            <strong>Message:</strong> {result.message}
          </p>
          <p className="text-black text-[10px] mt-2">ID: {result._id}</p>
        </div>
      )}
    </div>
  );
};
