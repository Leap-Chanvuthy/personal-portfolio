import React, { useEffect, useState } from "react";
import { Pagination, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/leap-chanvuthy/repos"
        );
        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data); // Initialize with all repos
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Filter repos by search term
  useEffect(() => {
    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepos(filtered);
    setCurrentPage(1); // Reset to page 1 on new search
  }, [searchTerm, repos]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRepos = filteredRepos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">Some of My Projects</h1>
      <TextInput
        type="text"
        rightIcon={HiSearch}
        placeholder="Search repositories..."
        className="mb-4 w-80 p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRepos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg shadow hover:shadow-lg transition duration-200"
          >
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-sm">
              {repo.description || "No description available."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 mt-2 block hover:underline"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredRepos.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default GitHubRepos;
