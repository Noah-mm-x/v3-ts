module.exports = {
  "plugins": {
    // autoprefixer: {
    //   browsers: ['Android >=0.4','iOS>=8'],
    // },
    "postcss-pxtorem":{
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.norem']
    }
  }
}