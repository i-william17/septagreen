import Header from '../header/Header';
import Footer from '../footer/Footer';
import BlogSection from '../blogs/Blogs';

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5efe3] pt-24 dark:bg-[#20232e]">
        <BlogSection compact />
      </main>
      <Footer />
    </>
  );
}
