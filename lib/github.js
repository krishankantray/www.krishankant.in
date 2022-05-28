import fetch from 'isomorphic-unfetch'
const GITHUB_REPOS = 'https://api.github.com/users/krishankantray/repos?per_page=100'
export const githubRepos = async () => {
  return await fetch(GITHUB_REPOS, {
    headers: {
      authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  }).then((res) => res.json())
}
