import * as React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';
import ImageX from './ImageX';
import imageObj from '../../public/images/other/wechat.png';
import type { PopoverProps } from '@chakra-ui/react';

function WeChatPopver(props: PopoverProps) {
  const { children } = props;
  
  return (
    <Popover {...props}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent maxWidth={150}>
        <ImageX src={imageObj.src} height={150} width={150} />
      </PopoverContent>
    </Popover>
  );
}

WeChatPopver.displayName = 'WeChatPopver';
export default WeChatPopver;
