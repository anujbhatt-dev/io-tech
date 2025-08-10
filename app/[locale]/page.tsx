import Landing from "@/components/Landing";

export default async function Home({
  params
}: {
  params: Promise<{locale: 'en' | 'ar'}>;
}) {

  const {locale} = await params
  if(!locale) return null
  return (
    <Landing locale={locale}/>
  );
}
