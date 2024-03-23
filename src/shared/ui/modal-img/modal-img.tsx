"use client"
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface Props {
  src: string;
}

export const MyImg = ({ src }: Props) => (
  <Zoom>
    <Image
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={src}
      width={500}
      height={500}
    />
  </Zoom>
);
