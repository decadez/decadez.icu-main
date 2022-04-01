import { repoUrl } from 'constants/index';
import ImageX from 'components/ImageX';
import { IconWeChat } from 'components/Icon/IconWeChat';
import { IconGitHub } from 'components/Icon/IconGitHub';
import WeChatPopver from 'components/WeChatPopver';

function SelfIntroduction() {
  return (
    <div className="mt-6 shadow-inner bg-gray-100 dark:bg-card-dark py-8 px-8 max-w-sm mx-auto rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="flex justify-center">
        <ImageX className='rounded-full' width={100} height={100} src="/images/home/decade.png" />
      </div>

      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-black text-2xl font-semibold dark:text-white">decadez</p>
          <p className="text-gray-500 font-medium dark:text-gray-300">Frontend Engineer</p>
        </div>
        <div className="flex items-center md.max:justify-center">
          {
            <WeChatPopver placement="bottom" trigger="hover">
              <div>
                <IconWeChat />
              </div>
            </WeChatPopver>
          }
          <a href={repoUrl} target="_blank">
            <IconGitHub className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

SelfIntroduction.displayName = 'SelfIntroduction';

export default SelfIntroduction;
