import { Configuration } from 'webpack';

import { buildCache } from './buildCache';
import { buildDevServer } from './buildDevServer';
import { moduleBuildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    performance: {
      hints: false,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    cache: buildCache(options),
    plugins: buildPlugins(options),
    module: moduleBuildLoaders(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
