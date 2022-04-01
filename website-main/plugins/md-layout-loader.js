const frontmatter = require('gray-matter');
const path = require('path');

module.exports = async function (src) {
  const callback = this.async();
  // 使用gray-matter获取md文件的头信息
  const { content, data } = frontmatter(src);

  const pageParentDir = path
    .dirname(path.relative('./src/pages', this.resourcePath))
    .split(path.sep)
    .shift();
  const layoutMap = {
    blog: 'Blog',
    interview: 'Interview',
    'ant-s': 'AntS',
    'ant-s-components': 'AntS',
    'ant-s-others': 'AntS',
  }; 

  console.log(pageParentDir);

  const layout = layoutMap[pageParentDir] || 'Home';

  const code =
    `import withLayout from 'components/Layout/Layout${layout}';
    export default withLayout(${JSON.stringify(data)});
` + content;

  return callback(null, code);
};
