import * as React from 'react';
import YouWillLearnCard from 'components/MDX/YouWillLearnCard';
import SelfIntroduction from './SelfIntroduction';
function HomepageHero() {
  return (
    <>
      <SelfIntroduction />
      <section className="my-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="技术沉淀" path="/blog">
            <p>不限于前端技术，杂七杂八</p>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="面试题汇总" path="/interview">
            <p>经过整理的前端面试题汇总，多解多思路</p>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="Ant-s" path="/ant-s">
            <p>基于antd的有趣的组件库</p>
            <div className="flex mt-2">
              <img
                className="mr-2"
                src="https://img.shields.io/badge/-Antd-9cf"
                alt="nestjs"
              />
              <img
                src="https://img.shields.io/badge/-Typescript-blue"
                alt="TypeORM"
              />
            </div>
          </YouWillLearnCard>
        </div>
        <div className="flex flex-col justify-center">
          <YouWillLearnCard title="Backend-for-blog" path="/interface">
            <p>本站用到的后端服务，手摸手从0搭建</p>
            <div className="flex mt-2">
              <img
                className="mr-2"
                src="https://img.shields.io/badge/-Nestjs-red"
                alt="nestjs"
              />
              <img
                src="https://img.shields.io/badge/-TypeORM-green"
                alt="TypeORM"
              />
            </div>
          </YouWillLearnCard>
        </div>
      </section>
    </>
  );
}

export default HomepageHero;
