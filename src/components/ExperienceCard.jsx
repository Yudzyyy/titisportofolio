export default function ExperienceCard({ role, place, bullets }) {
    return (
      <div className="relative bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 shadow-lg">
        <h4 className="text-lg font-semibold text-white">{role}</h4>
        <p className="text-sm text-neutral-400 mb-4">{place}</p>
  
        <ul className="space-y-2">
          {bullets.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm text-neutral-200">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  