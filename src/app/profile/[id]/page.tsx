

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page
        <span className="p-2 ml-3 rounded bg-yellow-700 text-black ">{params.id}</span>
      </p>
    </div>
  )
}
