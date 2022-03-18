import { repoUrl } from 'constants/index';
import ImageX from 'components/ImageX';
import { IconWeChat } from 'components/Icon/IconWeChat';
import WeChatPopver from 'components/WeChatPopver';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import CustomSwiper from './CustomSwiper';

function SelfIntroduction() {
  return (
    <div className="md:flex items-center shadow-inner mt-6 bg-gray-100 dark:bg-card-dark overflow-hidden rounded-lg">
      <div className="w-64 h-30 flex m-auto justify-center">
        <CustomSwiper />
      </div>
      <div className="flex-2 md.max:border-t-2 md:border-l-2 border-gray-200 dark:border-gray-600">
        <dl>
          <div className="border-b-2 dark:border-gray-600 px-4 py-3 sm:grid sm:grid-cols-3 sm:px-6">
            <dt className="text-base font-bold text-gray-700 dark:text-white">
              介绍
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              目前在上海从事着前端开发工作。
              {
                <WeChatPopver placement="bottom" trigger="hover">
                  <span>
                    <IconWeChat className="inline-block" />
                  </span>
                </WeChatPopver>
              }
            </dd>
          </div>
          <div className="border-b-2 dark:border-gray-600 px-4 py-3 sm:grid sm:grid-cols-3 sm:px-6">
            <dt className="text-base font-bold text-gray-700 dark:text-white">
              擅长
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              熟悉vuejs、reactjs、nextjs、nestjs、nuxtjs等框架的安装删除。
            </dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:px-6">
            <dt className="text-base font-bold text-gray-700 dark:text-white">
              自我评价
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              一名籍籍无名但容易相处的前端切图仔。
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

SelfIntroduction.displayName = 'SelfIntroduction';

export default SelfIntroduction;
