import { useContext } from "react";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { nameAttributesHero, attributesHero } from "./heroDataDescription";
import { HeroBioOrHype } from "./HeroBioOrHype/HeroBioOrHype";
import HeroNavigator from "../HeroNavigator/HeroNavigator";
import heroDescpStyle from "./HeroDescription.module.scss";
import HeroAbilities from "../HeroAbilities/HeroAbilities";
import TreeOfTalents from "../HeroTreeOfTalents/TreeOfTalents";

export default function HeroDescription() {
  const { currentHeroData, prevHeroData, nextHeroData } =
    useContext(HeroDataContext);

  const { data: currentHero } = currentHeroData;
  const { data: prevHero } = prevHeroData;
  const { data: nextHero } = nextHeroData;

  if (
    !currentHero ||
    currentHero.length === 0 ||
    !prevHero ||
    prevHero.length === 0 ||
    !nextHero ||
    nextHero.length === 0
  ) {
    return <div>Loading or no data available</div>;
  }

  // console.log(currentHero);

  const {
    name_loc,
    primary_attr,
    npe_desc_loc,
    hype_loc,
    complexity,
    id,
    attack_capability,
    bio_loc,
    abilities,
    talents,
  } = currentHero[0];
  const { name_loc: prevHeroName } = prevHero[0];
  const { name_loc: nextHeroName } = nextHero[0];

  // Теперь безопасно обращаемся к элементам массивов
  const currentName = name_loc;
  const prevName = prevHeroName.toLowerCase().split(" ").join("");
  const nextName = nextHeroName.toLowerCase().split(" ").join("");

  const currentAttributeHero = attributesHero[primary_attr] ?? null; // картинка атрибута
  const currentNameAttrHero = nameAttributesHero[primary_attr] ?? null; // название атрибута

  return (
    <section className={heroDescpStyle["hero-description"]}>
      <div className={heroDescpStyle["background-line"]}></div>
      <div className={`${heroDescpStyle["hero-vertical-bar"]}`}>
        <img
          src={currentAttributeHero}
          alt={`picture of ${currentNameAttrHero}`}
          className={heroDescpStyle["attr-img-bar"]}
        />
        <span className={heroDescpStyle["name-of-hero-bar"]}>
          {currentName}
        </span>
        <span className={heroDescpStyle["hero-id"]}>{id}</span>
        <div className={heroDescpStyle["vertical-line-bar"]}></div>
      </div>
      <section
        className={`${heroDescpStyle["animated-appear"]} ${heroDescpStyle["description"]}`}
      >
        <div className={heroDescpStyle["attribute"]}>
          <img
            width="32"
            height="32"
            src={currentAttributeHero}
            alt={`name of attribute ${currentNameAttrHero}`}
            className={heroDescpStyle["attr-img"]}
          />
          <span className={heroDescpStyle["attr"]}>{currentNameAttrHero}</span>
        </div>
        <h1 className={heroDescpStyle["name-of-hero"]}>{currentName}</h1>
        <p className={heroDescpStyle["short-description"]}>{npe_desc_loc}</p>
        <HeroBioOrHype
          bioHero={bio_loc}
          hypeHero={hype_loc}
          typeAttack={attack_capability}
          complexity={complexity}
        />
      </section>
      <HeroNavigator prevName={prevName} nextName={nextName} />

      <div className={heroDescpStyle["wrapper-top-skills-bar"]}>
        <h3 className={heroDescpStyle["title-abilities"]}>ABILITIES</h3>
        <div className={heroDescpStyle["wrapper-talents-abilities"]}>
          {/* <HeroAbilities heroAbilities={abilities} /> */}
          <TreeOfTalents heroTalents={talents} />
        </div>
      </div>
    </section>
  );
}
