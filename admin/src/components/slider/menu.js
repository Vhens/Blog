export const allMenu = [
  {
    name: '首页',
    url: 'app/home',
    icon: 'home',
  },
  {
    name: '用户模块',
    url: 'app/user',
    icon: 'user',
  },
  {
    name: '相册模块',
    url: 'app/gallery',
    icon: 'camera-o',
  },
  {
    name: '搜索模块',
    url: 'search',
    icon: 'search',
    children: [{
      name: '搜索引擎',
      url: 'app/searchEngine'
    }, ],
  },
  {
    name: '项目地址',
    url: 'app/follow',
    icon: 'github',
  } 
]