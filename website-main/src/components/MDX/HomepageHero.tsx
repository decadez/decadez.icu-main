import * as React from 'react';
import { Logo } from 'components/Logo';
import YouWillLearnCard from 'components/MDX/YouWillLearnCard';

function HomepageHero() {
  return (
    <>
      <div className="mt-8 lg:mt-10 mb-0 sm:mt-8 sm:mb-8 lg:mb-6 flex-col sm:flex-row flex flex-grow items-start sm:items-center justify-start mx-auto max-w-4xl">
        <div className="cursor-pointer rounded-full h-24 w-24 flex items-center justify-center text-white bg-purple-400 hover:bg-purple-700">
          decadez
        </div>
      </div>
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
