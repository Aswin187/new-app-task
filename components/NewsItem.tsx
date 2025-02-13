import Link from "next/link";
import Image from "next/image";

interface Article {
  urlToImage?: string;
  title: string;
  description: string;
  url: string;
}

export default function NewsItem({ article }: { article: Article }) {
  const imageUrl = article.urlToImage
    ? `/api/image-proxy?url=${encodeURIComponent(article.urlToImage)}`
    : "/fallback-image.jpg";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {article.urlToImage && (
        <Image
          src={imageUrl}
          alt={article.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <Link href={article.url} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
}
