export default function TeacherSubjectSection({ teacher }) {
  return (
    <div className="px-8">
      <h2 className="mb-4 text-3xl font-bold tracking-tighter">Matérias</h2>
      <div className="grid grid-cols-2 gap-4">
        {teacher.subjectSet.map(subject => (
          <div className="p-4 border rounded-lg">
            <h2 className="mb-2 text-2xl font-bold tracking-tighter">
              {subject.name}
            </h2>
            <p>{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
