export default function NavItem({ label, href = "#", mobile = false, onClick }) {
  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="text-sm font-medium hover:text-blue-400 transition"
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="relative block h-5 overflow-hidden text-sm leading-none group"
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
    </a>
  );
}
