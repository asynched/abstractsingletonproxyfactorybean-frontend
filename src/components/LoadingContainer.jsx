import Spinner from './Spinner'

export default function LoadingContainer() {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <Spinner />
    </div>
  )
}
