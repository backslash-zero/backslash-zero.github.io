import { NextPage } from "next";
import Info from "../../components/cv/cards/Info";
import Skill from "../../components/cv/cards/Skill";
import CardLayout from "../../components/layouts/CardLayout";
import SeparatorCV from "../../components/tools/SeparatorCV";
import { FiGithub, FiLink2 } from "react-icons/fi";
import {
  getHeader,
  getInfos,
  getSkillsLanguages,
  getSkillsProg,
  getSkillsTechs,
  getSkillsSoft,
  getSkillsOther,
  getStudies,
  getPro,
  getOutside,
  getCodeProjects,
} from "../../lib/NotionCV";
import CardGridLayout from "../../components/layouts/CardGridLayout";
// import { Databases } from "../../lib/NotionCV";

interface cvProps {
  header: any[];
  infos: any[];
  skillsLanguages: any[];
  skillsProg: any[];
  skillsTechs: any[];
  skillsSoft: any[];
  skillsOther: any[];
  studies: any[];
  pro: any[];
  outside: any[];
  codeprojects: any[];
}

const cv = (props: cvProps) => {
  const header = props.header.map((headerline, id) => {
    return (
      headerline.checkbox.checkbox && (
        <p key={id}>{headerline.value.rich_text[0].plain_text}</p>
      )
    );
  });

  const infos = props.infos.map((infoLine, id) => {
    return (
      infoLine.checkbox.checkbox && (
        <Info
          field={infoLine.field.title[0].plain_text}
          key={id}
          url={infoLine.link.url}
          content={infoLine.value.rich_text[0].plain_text}
        />
      )
    );
  });

  const skillsLanguages = props.skillsLanguages.map((infoLine, idx) => {
    return (
      <Skill
        key={infoLine.id}
        last={idx === props.skillsLanguages.length - 1}
        content={
          infoLine.Name.title[0].plain_text +
          " : " +
          infoLine.Value.rich_text[0].plain_text
        }
      />
    );
  });

  const skillsProg = props.skillsProg.map((infoLine, idx) => {
    return (
      <Skill
        key={infoLine.id}
        last={idx === props.skillsProg.length - 1}
        content={infoLine.Name.title[0].plain_text}
      />
    );
  });

  const skillsTechs = props.skillsTechs.map((infoLine, idx) => {
    return (
      <Skill
        key={infoLine.id}
        last={idx === props.skillsTechs.length - 1}
        content={infoLine.Name.title[0].plain_text}
      />
    );
  });

  const skillsSoft = props.skillsSoft.map((infoLine, idx) => {
    return (
      <Skill
        key={infoLine.id}
        last={idx === props.skillsSoft.length - 1}
        content={infoLine.Name.title[0].plain_text}
      />
    );
  });

  const skillsOther = props.skillsOther.map((infoLine, idx) => {
    return (
      <Skill
        key={infoLine.id}
        last={idx === props.skillsOther.length - 1}
        content={infoLine.Name.title[0].plain_text}
      />
    );
  });

  const Studies = props.studies.map((infoLine, id) => {
    return (
      <CardGridLayout first={id === 0} key={infoLine.id}>
        <div
          className=" flex justify-between
									text-sm"
        >
          <p className="font-mono text-xs">
            {infoLine["Date Start"].rich_text[0]?.plain_text} –{" "}
            {infoLine["Date End"].rich_text[0]?.plain_text || "present"}
          </p>
        </div>
        <div className="flex items-center text-base ">
          {infoLine.Link.rich_text[0] ? (
            <a
              className="underline-none"
              href={infoLine.Link.rich_text[0].plain_text}
            >
              {infoLine.Institution.rich_text[0].plain_text}
            </a>
          ) : (
            <p className="">{infoLine.Institution.rich_text[0].plain_text}</p>
          )}
        </div>
        <p className="font-mono text-xs">
          {infoLine.Location.rich_text[0].plain_text}
        </p>
        <div className="text-sm">
          <p>{infoLine["Tagline"].rich_text[0]?.plain_text || ""}</p>
        </div>
      </CardGridLayout>
    );
  });
  const Pro = props.pro.map((infoLine, id) => {
    return (
      <CardGridLayout first={id === 0} key={id}>
        <p className="font-mono text-xs">
          {infoLine["Date Start"].rich_text[0].plain_text} –{" "}
          {infoLine["Date End"].rich_text[0].plain_text}
        </p>

        <div className="flex items-center text-base">
          <p className="">{infoLine.Name.title[0].plain_text}</p>
          <p className="">
            {infoLine.Institution.rich_text[0] &&
              " : " + infoLine.Institution.rich_text[0].plain_text}
          </p>
        </div>
        <p className="font-mono text-xs">
          {infoLine.Location.rich_text[0]?.plain_text || ""}
        </p>
        <div className="text-xs leading-relaxed">
          <p>{infoLine.Tagline.rich_text[0].plain_text}</p>
        </div>
      </CardGridLayout>
    );
  });
  const CodeProjects = props.codeprojects.map((infoLine, id) => {
    return (
      <CardLayout first={id === 0} key={id}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <p className="text-base">{infoLine.Name.title[0].plain_text}</p>
            {infoLine.repo.url && (
              <a href={infoLine.repo.url}>
                <FiGithub />
              </a>
            )}
            {infoLine.Deployed.url && (
              <a href={infoLine.Deployed.url}>
                <FiLink2 />
              </a>
            )}
          </div>
          <div
            className=" flex flex-wrap gap-2 text-xs
									opacity-80"
          >
            {infoLine.Technologies.multi_select.map((technology: any) => {
              return (
                <div
                  className={` p-1 pr-2 pl-2 bg-${technology.color} rounded-md outline outline-1`}
                  key={technology.id}
                >
                  {technology.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="leading-relaxed">
          <p>{infoLine.Tagline.rich_text[0].plain_text}</p>
        </div>
      </CardLayout>
    );
  });
  const Outside = props.outside.map((infoLine, id) => {
    return (
      <CardLayout first={id === 0} key={id}>
        <div className="flex items-center">
          <p className="">{infoLine.Name.title[0].plain_text}</p>
          {/* <p className="text-xs">{infoLine.Location.rich_text[0].plain_text}</p> */}
        </div>
        <div className="text-sm">
          <p>{infoLine.Text.rich_text[0].plain_text}</p>
        </div>
        {infoLine.Link.url && (
          <div
            className="flex gap-2 text-sm 
							underline underline-offset-4"
          >
            <a href={infoLine.Link.url}>{infoLine.Link.url}</a>
          </div>
        )}
      </CardLayout>
    );
  });

  return (
    <div
      className="
						w-full
						overflow-scroll p-0 font-sans
						text-stone-800 md:p-8
						print:block print:overflow-visible"
    >
      <div
        className="grid
							max-w-7xl gap-x-20 gap-y-4 md:m-auto md:grid-cols-[1fr_216px] md:p-8 md:outline 
							md:outline-1 md:outline-stone-800 print:m-0
							print:grid-cols-[1fr_216px] print:outline-none"
      >
        <div className="flex">
          <div className="flex flex-col gap-4">{header}</div>
        </div>
        <div
          className="
					col-span-1 row-span-2 flex
					flex-col
					gap-8
          text-sm
				"
        >
          <div className="flex w-full flex-col gap-2 font-mono">{infos}</div>
          <div className="w-full">
            <h3 className="font-light ">📁 Languages</h3>
            {skillsLanguages}
          </div>
          <div className="w-full">
            <h3 className="font-light ">📁 Programming</h3>
            {skillsProg}
          </div>
          <div className="w-full">
            <h3 className="font-light ">📁 Technologies</h3>
            {skillsTechs}
          </div>
          <div className="w-full">
            <h3 className="font-light ">📁 Software</h3>
            {skillsSoft}
          </div>
          <div className="w-full">
            <h3 className="font-light ">📁 Other</h3>
            {skillsOther}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="font-light"> Code Projects </h2>
            <div className="w-full">{CodeProjects}</div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-light"> Professional Experiences </h2>
            <div className="w-full">{Pro}</div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-light"> Studies </h2>
            <div className="w-full">{Studies}</div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-light">Other</h2>
            <div className="w-full">{Outside}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let header = await getHeader();
  let infos = await getInfos();
  let skillsLanguages = await getSkillsLanguages();
  let skillsProg = await getSkillsProg();
  let skillsTechs = await getSkillsTechs();
  let skillsSoft = await getSkillsSoft();
  let skillsOther = await getSkillsOther();
  let studies = await getStudies();
  let pro = await getPro();
  let outside = await getOutside();
  let codeprojects = await getCodeProjects();

  return {
    props: {
      header: header,
      infos: infos,
      skillsLanguages: skillsLanguages,
      skillsProg: skillsProg,
      skillsTechs: skillsTechs,
      skillsSoft: skillsSoft,
      skillsOther: skillsOther,
      studies: studies,
      pro: pro,
      outside: outside,
      codeprojects: codeprojects,
    },
  };
}

export default cv;
