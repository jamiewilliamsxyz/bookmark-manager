interface BadgeProps {
  children: string;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <li className="bg-neutral-200 h-fit w-fit text-sm rounded-full shadow-lg text-[#1a1a1a] px-3 py-0.5 select-none">
      {children}
    </li>
  );
};

export default Badge;
