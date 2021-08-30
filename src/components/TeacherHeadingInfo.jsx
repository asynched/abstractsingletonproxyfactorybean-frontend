export default function TeacherHeadingInfo({ teacher }) {
  return (
    <div className="mb-8 -mt-8 px-8 flex gap-2">
      <img
        src={teacher.imageUrl}
        alt={teacher.name}
        className="self-end w-32 h-32 rounded-full object-cover border-2 border-white"
      />
      <div className="self-end">
        <h1 className="text-5xl font-bold tracking-tighter">Professor</h1>
        <p className="text-2xl">{teacher.name}</p>
      </div>
    </div>
  )
}
