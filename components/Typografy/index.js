export const Title = ({ children, small = false }) => {
  if (small) {
    return (
      <h2 className="text-center text-2xl leading-8 font-extrabold tracking-tight text-white   sm:text-3xl">
        {children}
      </h2>
    );
  }

  return (
    <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white   sm:text-4xl">
      {children}
    </h2>
  );
};

export const Subtitle = ({ children, small = false }) => {
  if (small) {
    return (
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
        {children}
      </p>
    );
  }
  return (
    <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
      {children}
    </p>
  );
};
