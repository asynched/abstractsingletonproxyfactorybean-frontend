export default function DashboardDiscordBanner() {
  return (
    <div className="p-8 text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-xl">
      <h1 className="mb-2 text-4xl font-bold tracking-tighter">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Também estamos no Discord!
        </span>{' '}
        👾
      </h1>
      <p className="mb-3 text-lg text-gray-300">Venha conversar com a gente!</p>
      <a
        className="text-purple-400 hover:underline"
        href="https://discord.gg/xFX22C5UPe"
        target="_blank"
      >
        Acesse através desse link
      </a>
    </div>
  )
}
