type Props = {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export default function AuthorCard({ author }: Props) {
  return (
    <div className="mb-16 flex items-center gap-4">
      <img
        src={author.avatar}
        alt={author.name}
        className="h-14 w-14 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold">{author.name}</h3>

        <p className="text-neutral-500">{author.role}</p>
      </div>
    </div>
  );
}
