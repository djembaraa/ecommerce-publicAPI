export default async function ServicesPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.replace(/-/g, ' ');
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col justify-center text-center">
      <h1 className="text-4xl font-bold mb-6 capitalize">{title}</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        This is a placeholder page for the {title} service. We are constantly working on updating our services to provide you with the best beauty experience.
      </p>
    </div>
  );
}
