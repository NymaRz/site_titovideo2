import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const Article3 = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Les Tendances du Montage Vidéo en 2023 : Ce que votre entreprise doit savoir

                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                 
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                    >
                      Tendances
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Lorsqu'il s'agit de réaliser une vidéo de qualité, une bonne organisation est essentielle . De la planification à la post-production, chaque étape joue un rôle crucial dans 
                  votre processus de création. L'utilisation d'équipement approprié, un tournage soigné, un montage précis et des finitions professionnelles sont autant de facteurs qui contribuent 
                  à créer une vidéo captivante. En comprenant et en suivant ces étapes clés, vous pouvez vous assurer que votre vidéo atteindra ses objectifs et captivera vos fans ! (car oui, pour nous, vous etes deja une star) 

                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/articles/article1.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  📑 📆  Étape 1 : La planification 
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Pour commencer, définissez l'objectif de votre vidéo. Pour ce faire, vous pouvez utiliser la méthode très scolaire mais très utile : QUI/ QUOI/ OU/ QUAND/ COMMENT/ POURQUOI. Ensuite, identifiez votre public cible et élaborez un scénario ou un plan détaillé. Pensez aux différents éléments tels que le concept, l'histoire, le message, les séquences, les lieux de tournage et les acteurs ou intervenants. TOUT doit être planifié afin que vous perdiez le moins de temps possible lors de cette réalisation. 
                  En revanche, veillez à garder une petite part d’inconnu, qui développera votre créativité ! 
                  </p>
                  
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  📹🎒 Étape 2 : L'équipement, aussi appelé “le matos” 
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Imaginez-vous arriver sur votre lieu de tournage et avoir oublié la moitié du matériel prévu ? Alors avant de partir précipitamment de chez vous, assurez-vous d'avoir l'équipement adéquat comme une caméra de qualité, un trépied, des microphones et des éclairages appropriés (en gros, tout ce que vous avez jugé nécessaire d’apporter) . Vérifiez également les réglages de votre équipement et effectuez des tests avant le tournage. Cette vérification est primordiale si vous voulez éviter de vous rendre compte, 
                  une fois chez vous, que le micro de votre collègue David était mal positionné… N’oubliez pas de préparer vos acteurs ou intervenants en leur fournissant des informations sur leurs rôles et en effectuant des répétitions si nécessaire.
                  </p>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  🤳🏻🎬 Étape 3 : Le tournage, comme à Hollywood 

                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">  
                      Rendez vous sur les lieux de tournage sélectionnés et assurez-vous qu'ils correspondent à votre scénario. Veillez à la qualité de l'image en termes de composition, 
                      de mise au point et d'exposition. Pas besoin d’être un expert pour constater que l’objectif est sale ou que votre vidéo est floue !  Utilisez des angles de caméra variés
                       pour ajouter de l'intérêt visuel. Enregistrez un son de qualité en utilisant des microphones adaptés à chaque situation. Prenez en compte les éléments de production tels que les décors, les costumes, le maquillage et les accessoires.
                  </p>
                  
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  🖥️⏯️ Étape 4 : Le montage : l’étape délicate 
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">  
                  D’abord, il faut importer les séquences de votre vidéo sur un logiciel de montage vidéo. Pensez OR-GA-NI-SA-TION. Triez vos séquences  dans l'ordre souhaité et supprimez 
                  les prises non désirées. Pour dynamiser votre montage, ajoutez des transitions, des effets visuels, des titres et des éléments graphiques pour améliorer la qualité et l'attrait 
                  de votre vidéo. Vous pouvez également ajouter votre musique préférée ou des effets sonores si nécessaire. Veillez à ce que le rythme du montage soit cohérent et engageant : par exemple, coordonner le tempo de votre musique avec les transitions. Cependant cette étape nécessite du temps et quelques connaissances… C’est là que Titovidéo intervient ! Déléguez nous votre montage, on s’occupe de tout. Votre carrière de cinématographe mérite bien une petite pause, non ? 
                  </p>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    📱✨ Étape 5 : La post-production, ou comment perfectionner votre vidéo
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">  
                  Après le montage, effectuez des retouches finales pour améliorer la qualité de l'image, ajuster la couleur et le contraste si nécessaire. N’oubliez pas de régler le volume 
                  sonore et assurez-vous que le son est clair et équilibré, le but n’étant pas d’endommager les tympans de vos spectateurs . Point important : exportez la vidéo dans le format 
                  approprié en fonction de son utilisation prévue (par exemple, en ligne ou sur DVD) 
                  </p>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  👩‍💻🎯 Étape 6 : Promotion et partage : atteindre son objectif !
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">  
                  Remember votre objectif principal ! Une fois votre vidéo finalisée après toutes ces étapes méticuleuses, pensez à sa promotion. Partagez-la sur les réseaux sociaux, votre 
                  site web ou d'autres plateformes pertinentes pour atteindre votre public cible. Utilisez des stratégies de marketing vidéo telles que des aperçus, des extraits ou des miniatures 
                  attrayantes pour susciter l'intérêt, sans pour autant que cela soit trop flagrant à base grandes flèches rouges et d’emoji choqués “😱😱😱”…

                  </p>


                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                    ⭐️ N'oubliez pas que la créativité, l'originalité et la qualité de la réalisation sont également des éléments importants 
                    pour faire une bonne vidéo. Prenez le temps de perfectionner vos compétences techniques, d'expérimenter et de trouver votre 
                    style unique. Si vous choisissez de déléguer votre montage vidéo, n’hésitez pas à communiquer régulièrement avec les monteurs, 
                    afin de peaufiner votre style et les détails qui vous semblent importants. Et n’oubliez pas, en montage vidéo, tout est modifiable 
                    selon vos envies !  

                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-0 bottom-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
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

export default Article3;
