import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

const Portfolio = () => {
  return (
    <>
       <section id="portfolio" className="relative z-10 py-36 md:py-40 lg:py-28">
        
      <div className="container">
        <div
          className="wow fadeInUp relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16"
          data-wow-delay=".2s"
        >
        
        <SectionTitle
          title="Découvrez notre catalogue"
          paragraph="Quoi de mieux pour nous faire confiance que de découvrir ce dont on est capable."
          center
          width="665px"
        />
        </div>
        <div className="w-full border-b pb-20 dark:border-[#2E333D]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative mb-8 overflow-hidden rounded">
                  <a href="https://vimeo.com/808073427" className="block">
                    <iframe width="315" height="558" src="https://player.vimeo.com/video/808073427?h=310c53b2f4" title="Viméo vidéo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </a>
                </div>
                <div>
                  <h3>
                    <a
                      href="https://vimeo.com/808073427"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                     Totem Formation
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative mb-8 overflow-hidden rounded">
                <a href="https://player.vimeo.com/video/786020598?h=0e8f0fefa3" className="block">
                    <iframe width="315" height="558" src="https://player.vimeo.com/video/786020598?h=0e8f0fefa3" title="Viméo vidéo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </a>
                </div>
                <div>
                  <h3>
                    <a
                      href="https://player.vimeo.com/video/786020598?h=0e8f0fefa3"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      SCOTT PREMIUM
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative mb-8 overflow-hidden rounded">
                <a href="https://vimeo.com/808340090" className="block">
                    <iframe width="315" height="558" src="https://player.vimeo.com/video/808340090?h=ab75bba0bb" title="Viméo vidéo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </a>
                </div>
                <div>
                  <h3>
                    <a
                      href="https://vimeo.com/808340090"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Zoom sur le salon event off
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative mb-8 overflow-hidden rounded">
                <a href="https://vimeo.com/808071745" className="block">
                    <iframe width="314" height="558" src="https://player.vimeo.com/video/808071745?h=fcaf46e7de" title="Viméo vidéo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </a>
                </div>
                <div>
                  <h3>
                    <a
                      href="https://vimeo.com/808071745"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Chorégraphie
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative mb-8 overflow-hidden rounded">
                  <a href="https://vimeo.com/786029423" className="block">
                    <iframe width="315" height="558" src="https://player.vimeo.com/video/786029423?h=19ba55b3da" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </a>
                </div>
                <div>
                  <h3>
                    <a
                      href="https://vimeo.com/786029423"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                     Titovidéo en 1 vidéo
                    </a>
                  </h3>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
     
    </>
  );
};

export default Portfolio;
