import { highlighter } from './highlighter';

interface OptionsInterface {
  urlTheme?: string;
}

export default (eleventyConfig: any, options?: OptionsInterface) => {
  eleventyConfig.namespace('sardine-', () => {
    eleventyConfig.addTransform('code-highlighter', async (content: string, outputPath: string) => {
      try {
        if (outputPath && outputPath.endsWith('.html')) {
          content = await highlighter(content, options?.urlTheme);
        }
      } catch (error) {
        console.error(error);
      }
      return content;
    });
  });
};
