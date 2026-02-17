import { LogoMarquee } from "./LogoMarquee";
import { HeroVideoDialog } from "./ui/hero-video-dialog";

const VideoSection = () => {
  return (
    <div className="container m-auto">
      <div className="relative mx-auto">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
        <p className="mt-3 text-lg font-normal text-center">
          Finance flow has been featured on
        </p>
        <LogoMarquee />
      </div>
    </div>
  );
};

export default VideoSection;
