import { RepoCard } from 'react-repo-widget'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from './Link'

const ProjectCard = ({ projList }) => {
  const { theme, resolvedTheme } = useTheme()
  const isDark = theme === 'dark'
  const USERNAME = 'krishankantray'
  console.log(projList)
  const repoData = projList.map((proj) => ({
    name: proj.name,
    owner: { avatarUrl: proj.owner?.avatar_url, login: proj.owner?.login },
    description: proj.description,
    forks: { totalCount: proj.forks_count },
    primaryLanguage: { name: proj.language },
    licenseInfo: { spdxId: proj.license?.spdxId },
    pushedAt: proj.pushed_at,
    stargazerCount: proj.stargazers_count,
    watchers: { totalCount: proj.watchers_count },
  }))
  return (
    <div className="grid grid-cols-3 gap-4">
      {repoData?.map((proj, ind) => (
        <div className="flex items-center justify-center bg-dark" key={ind}>
          <Link
            href={`https://github.com/${proj.owner.login}/${proj.name}`}
            target="_blank"
            rel="noreferrer"
            className="w-72 bg-dark border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-600 delay-100 duration-200"
          >
            <div className="flex flex-row">
              <Image
                src={proj.owner.avatarUrl}
                alt="avatar"
                height={27}
                width={32}
                class="rounded"
              />
              <p className="ml-3">
                <span className="text-gray-500 font-semibold">/</span>
                <span className="text-gray-300 font-semibold">{proj.name}</span>
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-3">{proj.description}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
