import createMdx from '@next/mdx';

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    pageExtensions: [
      'js', 'jsx', 'md', 'mdx', 'ts', 'tsx'
    ],
};

const withMdx = createMdx({
  extension: /\.mdx?$/,
});

export default withMdx(nextConfig);
