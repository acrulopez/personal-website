export interface GitHubRepoData {
  title: string;
  description: string;
  tags: string[];
}

export async function fetchGitHubRepoData(
  repoUrl: string
): Promise<GitHubRepoData | null> {
  try {
    // Extract owner and repo from URL
    // Supports formats like:
    // - https://github.com/owner/repo
    // - https://github.com/owner/repo.git
    // - github.com/owner/repo
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?$/i);
    if (!match) return null;

    const [, owner, repo] = match;
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.warn(`Failed to fetch GitHub repo data for ${repoUrl}:`, response.status);
      return null;
    }

    const data = await response.json();

    return {
      title: data.name || "",
      description: data.description || "",
      tags: (data.topics || []) as string[],
    };
  } catch (error) {
    console.warn(`Error fetching GitHub data for ${repoUrl}:`, error);
    return null;
  }
}
