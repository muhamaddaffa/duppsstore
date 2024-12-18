import cx from "classnames";

interface ButtonTabProps {
  detail: string;
  active: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { detail, active } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <a data-filter="*" href="#" className={btnClass}>
      {detail}
    </a>
  );
}
