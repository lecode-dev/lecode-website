/* This example requires Tailwind CSS v2.0+ */
export default function Divider({ children }) {
  return (
    <div className="relative py-6 sm:w-1/2 sm:mx-auto">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-700" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-gray-darkest text-lg font-medium text-gray-700">
          {children}
        </span>
      </div>
    </div>
  );
}
