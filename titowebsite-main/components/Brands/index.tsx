import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/1kubator.png",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/pool.png",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/scoot.png",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/brands/optique.png",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/pepite.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <div className="px-4 xl:container">
        <div
          className="wow fadeInUp relative mx-auto mb-16 max-w-[620px] text-center"
          data-wow-delay=".2s"
        >
          <h2
            className="mb-5 font-heading text-[38px] font-semibold leading-tight text-dark dark:text-white"
          >
          Ils nous ont fait confiance
          </h2>
        </div>
        <div className="border-b pb-24 dark:border-[#2E333D]">
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".2s"
          >
            <div className="w-full px-4">
              <div
                className="flex flex-wrap items-center justify-center"
              >
                <a
                  href="https://www.1kubator.com/"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="/images/brands/1kubator.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="/images/brands/1kubator.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="https://www.pepitebretagne.fr/"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="/images/brands/pepite.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="/images/brands/pepite.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="https://lepoool.tech/"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="/images/brands/lepool-dark.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="/images/brands/lepoool-light.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="https://www.monpiedceheros.fr/"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="/images/brands/scott-light.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="/images/brands/scott.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="https://www.optique-taillandier.fr/"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="/images/brands/optique-light.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="/images/brands/optique-dark.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="http://yao.bzh/"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="/images/brands/yao-light.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="/images/brands/yao-light.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

