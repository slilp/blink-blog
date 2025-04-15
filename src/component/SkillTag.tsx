interface SkillTagProps {
  label: string;
}

function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
      {label}
    </span>
  );
}

export default SkillTag;
