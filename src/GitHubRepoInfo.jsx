import React, { useState } from "react";
import { useQuery } from "react-query";

const fetcher2 = (repo) => {
    return fetch(`https://api.github.com/repos/${repo}`).then((res) => res.json());
  };


const GitHubRepoInfo = () => {
  const [repoName, setRepoName] = useState("");

  const { isLoading, data } = useQuery(["repo-name", repoName], () =>
    fetcher2(repoName)
  );

  return (
    <div>
      <h2 className="github-title">Github Repo information</h2>
      <input
        type="text"
        placeholder="Ex: facebook/react"
        onChange={(e) => setRepoName(e.target.value)}
      />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <p>Name : {data?.name}</p>
          <p>Description : {data?.description}</p>
          <p>Stars :{data?.stargazers_count} </p>
        </div>
      )}
    </div>
  );
};

export default GitHubRepoInfo;
