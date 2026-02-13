import PageBanner from "../../components/homePage/PageBanner";
import AboutSection from "../../components/homePage/AboutSection";

export default function AboutPage() {
    return (
        <>
            <PageBanner
                title="About Us"
                subtitle="Learn more about our journey, values, and commitment to quality appliance repair."
                image="/slider/noida.jpg"
            />
            <main className="bg-[#0d2235] py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <AboutSection />
                </div>
            </main>
        </>
    );
}
