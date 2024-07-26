// index.js
Page({
  data:{
    tab_index: 1,
    search: ''
  },
  onLoad(){

  },
  onShow(){

  },
  changeTabItem(e){
    this.setData({
      tab_index: e.currentTarget.dataset.tab_index
    })
  },
  handleChangeInput(e){
    console.log(e)
  },
  onSearch(e){
    console.log(e)
  }
})
