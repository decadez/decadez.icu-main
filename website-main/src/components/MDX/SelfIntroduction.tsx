import { repoUrl } from 'constants/index';
import ImageX from 'components/ImageX';
import imageObj from '../../../public/images/home/decade.gif';

function SelfIntroduction() {
  return (
    <div className="md:flex shadow-inner mt-6 bg-gray-100 dark:bg-card-dark overflow-hidden sm:rounded-lg">
      <div className="md:flex-shrink-0 flex justify-center items-center">
        <ImageX
          src={imageObj.src}
          layout="fixed"
          width={250}
          height={170}
          onClick={() => {
            window.open(repoUrl, '_blank');
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex-2 border-l-2 border-gray-200 dark:border-gray-600">
        <dl>
          <div className="border-b-2 dark:border-gray-600 px-4 py-3 sm:grid sm:grid-cols-3 sm:px-6">
            <dt className="text-base font-bold text-gray-700 dark:text-white">
              介绍
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              一名籍籍无名的前端切图仔。爱好lol，炒币，以及任何绅士喜好～
            </dd>
          </div>
          <div className="border-b-2 dark:border-gray-600 px-4 py-3 sm:grid sm:grid-cols-3 sm:px-6">
            <dt className="text-base font-bold text-gray-700 dark:text-white">
              擅长
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              vuejs, reactjs, nextjs, nestjs, nuxtjs等等入门操作。
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:px-6">
            <dt className="text-base font-bold text-gray-700 dark:text-white">
              自我评价
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              幽默，和善。始终以业务为第一，因为热爱，非内卷，自驱学习。
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

SelfIntroduction.displayName = 'SelfIntroduction';

export default SelfIntroduction;
