import prettierPlugin from 'prettier-plugin-tailwindcss';
module.exports = {
  plugins: [prettierPlugin()],
  tailwindConfig: './tailwind.config.cjs',
};
