export const Header = ({ Title }: { Title: String }) => {
  return (
    <header className="font-bold py-16 my-2 text-white md:text-4xl text-2xl">
      {Title}
    </header>
  );
};