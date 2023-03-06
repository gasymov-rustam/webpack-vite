import { FileCacheOptions } from 'webpack';

import { name } from '../../package.json';

import { BuildOptions } from './types';

export const buildCache = ({ isDev }: BuildOptions): FileCacheOptions | undefined => {
  if (!isDev) {
    return;
  }

  return {
    type: 'filesystem',
    name: `${name}Cache`,
  };
};
