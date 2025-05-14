import { renderToStaticMarkup } from 'react-dom/server';
import 'tsx/esm';

const inputDir = 'src';
const outputDir = 'dist';

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory(inputDir);
  eleventyConfig.setOutputDirectory(outputDir);

  eleventyConfig.addPassthroughCopy(`${inputDir}/styles/**/*.css`);

  eleventyConfig.addExtension(['11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
    compile() {
      return async function (data) {
        const content = await this.defaultRenderer(data);
        return '<!doctype html>' + renderToStaticMarkup(content);
      };
    },
  });
  eleventyConfig.addTemplateFormats(['11ty.ts', '11ty.tsx']);

  eleventyConfig.addGlobalData('layout', 'layout.11ty.tsx');
}
