<style scoped>
.layout-header-bar{
    background: #fff;
}
.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.content-bar{
  flex: 0;
  height: 55px;
}
</style>

<template>
  <div id="MainView">
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="currentNav[0]+ '-' + currentNav[1]" theme="dark" width="auto" :open-names="currentNav">
              <template v-for=" item  in routes.routes">
                <Submenu :key='item.title' :name="item.name? item.name:''" v-if=" item.children != null " >
                    <template slot="title">
                        <Icon :type="item.iconType"></Icon>
                        {{ item.title }}
                    </template>
                    <template  v-for="( child ) in item.children">
                      <router-link :key="child.path" :to="child.path">
                          <MenuItem :name="item.name+'-'+child.name" :key="item.name+'-'+child.name">
                            <Icon :type="child.iconType" :key="item.name+'-'+child.name"></Icon>
                            {{ child.title }}
                          </MenuItem>
                      </router-link>
                    </template>
                  </Submenu>
              </template>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px',height: '100vh'}">
          <Header style="">
              <Breadcrumb>
                <template v-for="( val, key ) in this.$store.state.App.currentNav.titleList" >
                    <BreadcrumbItem :key="key" :style="{color: '#fff'}">{{ val }}</BreadcrumbItem>
                </template>
              </Breadcrumb>
          </Header>
          <Content class="layout-header-bar content-bar">
            <Row style="box-shadow: 0 8px 6px rgba(0,0,0,.1);">
              <Col :md="{span:5}"  :lg="{span:4}" :xl="{span:3}" :xxl="{span:2}">
                  <div :style="{padding: '7px',marginLeft: '-15px'}">
                    <Dropdown style="margin-left: 20px">
                      <Button type="primary">
                          页面操作
                          <Icon type="ios-arrow-down"></Icon>
                      </Button>
                      <DropdownMenu slot="list">
                          <DropdownItem>关闭所有页面</DropdownItem>
                          <DropdownItem>关闭其他页面</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
              <Col :md="{span:19}"  :lg="{span:20}"  :xl="{span:21}" :xxl="{span:22}">
                <div :style="{flex: '1',padding: '5px 5px 15px' ,whiteSpace: 'nowrap',overflow: 'auto'}">
                  <template v-for="( val,key ) in this.$store.state.App.tabList" >
                      <router-link :key="key" :to="val.url">
                        <Tag type="dot" :color="val.color">{{val.titleList[1]}}</Tag>
                      </router-link>
                  </template>
                </div>
              </Col>
            </Row>
          </Content>
          <Content :style="{ width:'100%',flex: '1',margin: '0',overflow: 'scroll',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 8px 6px', background: '#f5f7f9'}">
            <router-view></router-view>
          </Content>
          <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'MainView',
  data () {
    return {
      routes,
      currentNav: this.$store.state.App.currentNav.nameList
    }
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    }
  },
  computed: {
    getCurrentNav () {
      return this.$store.state.App.currentNav
    }
  }
}
</script>
