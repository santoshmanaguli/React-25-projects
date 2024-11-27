import { Link } from "react-router";

export default function Home() {
  const apps = [
    {
      name: "Accordion",
      path: "/accordian",
    },
    { name: "Star Rating", path: "/star_rating" },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">React Mini Projects</h1>
        <p className="lead">A collection of mini projects built with React</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {apps.map((app, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center justify-content-center"
              >
                <Link to={app.path} className="text-decoration-none">
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
