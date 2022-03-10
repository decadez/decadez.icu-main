import * as React from 'react';
import YouWillLearnCard from 'components/MDX/YouWillLearnCard';
import SelfIntroduction from "./SelfIntroduction";
function HomepageHero() {
  return (
    <>
      <SelfIntroduction />
      <section className="my-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="技术沉淀" path="/blog">
            <p>
              鄙人这些年学习的技术，不限于前端技术，杂七杂八很多，技术真是一门玄学
            </p>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="面试题汇总" path="/interview">
            <p>
              个人目前为止遇到的前端面试题以及网络上借鉴过来的，做了整理和汇总
            </p>
          </YouWillLearnCard>
        </div>
      </section>
    </>
  );
}

export default HomepageHero;
