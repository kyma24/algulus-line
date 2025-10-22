import { diffTags } from '@/constants/tags';
import React from 'react';

export const DiffCircle = ({diff}: {diff: number}) => {
  const mapIndex = diff as keyof typeof diffTags;
  const bg = diffTags[mapIndex].bg;

  return (
    <div className={`h-1/1 aspect-square rounded-full ${bg} opacity-75`} />
  );
};