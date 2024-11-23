import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  tittle: string;
  active?: boolean;
  href?: string;
}
export default function Menu(props: Partial<MenuProps>) {
  const { tittle, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href} legacyBehavior>
        <a className={classTitle} aria-current="page">
          {tittle}
        </a>
      </Link>
    </li>
  );
}
