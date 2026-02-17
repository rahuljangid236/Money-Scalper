import { HeroVideoDialog } from "./ui/hero-video-dialog";

const VideoSection = () => {
  return (
    <div className="container m-auto relative bg-[linear-gradient(180deg,_rgba(169,163,194,0.2)_0%,_rgba(169,163,194,0.047)_100%)]">
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
    </div>
  );
};

export default VideoSection;
