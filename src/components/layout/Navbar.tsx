import { navigation } from "../../data/navigation";

function Navbar() {
  return (
    <nav>
      <h2>Mohamed.</h2>

      <ul>
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;