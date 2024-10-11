import HeroLeft from "../molecules/HeroLeft";
import HeroRight from "../molecules/HeroRight";
import MotionNav from "../molecules/MotionNav";

export default function HeroSection() {
  return (
    <div className="relative p-6 md:p-16">
      {/* Motion Navigation */}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section: Text and CTA */}
        <div className="flex-1 w-full md:w-1/2">
          <HeroLeft />
        </div>

        {/* Right Section: Profile Card Carousel */}
        <div className="flex-1 w-full md:w-1/2">
          <HeroRight />
        </div>
      </div>
      <div className="lg:pl-56">
        <MotionNav />
      </div>
    </div>
  );
}
