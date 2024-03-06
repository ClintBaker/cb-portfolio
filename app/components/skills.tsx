export default function Skills() {
  return (
    <div className="flex flex-col justify-center align-middle rounded-lg col-span-12 md:col-span-3 p-4 md:p-4 bg-blue-500 text-white">
      <div>
        <h2 className="text-2xl font-bold mb-2">My Skills</h2>
        <ul>
          <li>
            <span className="font-bold">Languages:</span> HTML, CSS, Javascript,
            Typescript
          </li>
          <li>
            <span className="font-bold">Frameworks:</span> Node.js, Express.js,
            Remix.js
          </li>
          <li>
            <span className="font-bold">Libraries:</span> React.js, jQuery
          </li>
          <li>
            <span className="font-bold">Databases:</span> SQL, MongoDB, GraphQL
          </li>
          <li>
            <span className="font-bold">Authorization:</span> Passport.js,
            Bcrypt
          </li>
          <li>
            <span className="font-bold">Testing:</span> Mocha, Chai
          </li>
        </ul>
      </div>
    </div>
  );
}
