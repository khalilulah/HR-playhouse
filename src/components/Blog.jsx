import Office from "../assets/images/Office.png";
import Office2 from "../assets/images/Office2.png";
import Office3 from "../assets/images/Office3.png";

function Blog() {
  return (
    <div className="max-w-400 m-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8 mb-0.5 sm:mb-1">
      <div>
        {/* heading */}
        <div className="relative z-10">
          <div className="mb-8 md:mb-10">
            <p className="font-family-Roobert mb-1 text-seconday-text text-3xl md:text-5xl lg:text-6xl">
              Our Blog
            </p>
            <p className="text-seconday-text text-base md:text-lg lg:text-xl">
              Daily doses of HR wisdom to keep you sharp.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="text-seconday-text font-family-RoobertMedium grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col">
            <img
              src={Office}
              alt="image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="my-5 flex-grow">
              <p className="font-family-Roobert text-2xl md:text-3xl mb-2">
                How to handle a difficult exit interview.
              </p>
              <p className="text-lg md:text-xl">
                3 key questions to ask that preserve the relationship...
              </p>
            </div>
            <button className="px-5 py-2 border rounded-4xl border-seconday-text hover:bg-seconday-text hover:text-secondary transition-colors w-fit">
              Read more
            </button>
          </div>

          <div className="flex flex-col">
            <img
              src={Office2}
              alt="image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="my-5 flex-grow">
              <p className="font-family-Roobert text-2xl md:text-3xl mb-2">
                Free Onboarding Checklist Template.
              </p>
              <p className="text-lg md:text-xl">
                Discover how automation is freeing up time for human
                connection...
              </p>
            </div>
            <button className="px-5 py-2 border rounded-4xl border-seconday-text hover:bg-seconday-text hover:text-secondary transition-colors w-fit">
              Read more
            </button>
          </div>

          <div className="flex flex-col">
            <img
              src={Office3}
              alt="image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="my-5 flex-grow">
              <p className="font-family-Roobert text-2xl md:text-3xl mb-2">
                Why AI is the new HR Assistant.
              </p>
              <p className="text-lg md:text-xl">
                Discover how automation is freeing up time for human
                connection...
              </p>
            </div>
            <button className="px-5 py-2 border rounded-4xl border-seconday-text hover:bg-seconday-text hover:text-secondary transition-colors w-fit">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
