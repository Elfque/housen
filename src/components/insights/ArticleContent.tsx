type ContentBlock =
  | {
      type: "heading";
      value: string;
    }
  | {
      type: "paragraph";
      value: string;
    }
  | {
      type: "image";
      value: string;
    };

export default function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <article className="prose prose-lg max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return <h2 key={index}>{block.value}</h2>;

          case "paragraph":
            return <p key={index}>{block.value}</p>;

          case "image":
            return (
              <img
                key={index}
                src={block.value}
                alt=""
                className="rounded-3xl"
              />
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
