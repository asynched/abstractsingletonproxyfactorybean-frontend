import GitHubLogo from '@assets/github.svg'

export default function DashboardGithubBanner() {
  return (
    <a
      className="relative flex flex-col justify-center bg-gray-900 rounded-lg p-8 text-white transform transition duration-300 hover:-translate-y-1"
      href="https://github.com/Nxrth-x/abstractsingletonproxyfactorybean-frontend"
      target="_blank"
    >
      <h1 className="text-3xl font-bold tracking-tighter">
        Nosso projeto é de código aberto!
      </h1>
      <p className="text-gray-400">Confira no GitHub! 😸</p>
      <img
        src={GitHubLogo}
        alt="GitHub"
        className="absolute right-[1rem] top-1/2 transform -translate-y-1/2 fill-current invert opacity-10 w-24 h-24"
      />
    </a>
  )
}
