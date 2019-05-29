import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ionicons',
  srcDir: 'src/components/',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [
        {
          src: '../svg/',
          dest: './build/svg/'
        },
        {
          src: './test/*.svg',
          dest: './assets/'
        }
      ]
    }
  ]
};
