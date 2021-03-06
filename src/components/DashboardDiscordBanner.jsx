import DiscordIcon from '@assets/discord.svg'

export default function DashboardDiscordBanner() {
  return (
    <a
      className="relative p-8 flex flex-col justify-center border rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white transform transition duration-300 hover:-translate-y-1"
      href="https://discord.gg/xFX22C5UPe"
      target="_blank"
    >
      <h1 className="text-4xl font-bold tracking-tighter">
        Também estamos no Discord!
      </h1>
      <p className="relative z-10 text-lg">Venha conversar com a gente!</p>
      <img
        className="absolute h-24 right-[1rem] bottom-0 opacity-50"
        src={DiscordIcon}
        alt="null"
      />
    </a>
  )
}
