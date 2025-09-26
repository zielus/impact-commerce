interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <div>
      <h1>Category: {params.slug}</h1>
      <p>Category page coming soon...</p>
    </div>
  );
}
