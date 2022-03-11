import * as React from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
export default function ImageX(props: ImageProps) {
  return <Image {...props} alt={props.alt} />;
}

ImageX.displayName = 'ImageX';
